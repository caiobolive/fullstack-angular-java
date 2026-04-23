package com.fullstack.study.application;

import com.fullstack.study.config.SecurityProperties;
import com.fullstack.study.domain.RefreshToken;
import com.fullstack.study.domain.UserAccount;
import com.fullstack.study.infrastructure.RefreshTokenRepository;
import com.fullstack.study.infrastructure.UserAccountRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Service
public class AuthService {

	private final UserAccountRepository users;
	private final RefreshTokenRepository refreshTokens;
	private final PasswordEncoder passwordEncoder;
	private final JwtEncoder jwtEncoder;
	private final SecurityProperties securityProperties;
	private final TokenHasher tokenHasher;

	public AuthService(
			UserAccountRepository users,
			RefreshTokenRepository refreshTokens,
			PasswordEncoder passwordEncoder,
			JwtEncoder jwtEncoder,
			SecurityProperties securityProperties,
			TokenHasher tokenHasher
	) {
		this.users = users;
		this.refreshTokens = refreshTokens;
		this.passwordEncoder = passwordEncoder;
		this.jwtEncoder = jwtEncoder;
		this.securityProperties = securityProperties;
		this.tokenHasher = tokenHasher;
	}

	@Transactional
	public AuthTokens login(String email, String password) {
		var user = users.findByEmailIgnoreCase(email)
				.filter(UserAccount::isEnabled)
				.orElseThrow(() -> new BadCredentialsException("Invalid credentials"));

		if (!passwordEncoder.matches(password, user.getPasswordHash())) {
			throw new BadCredentialsException("Invalid credentials");
		}

		var now = Instant.now();
		var accessToken = mintAccessToken(user, now);

		var refreshTokenValue = java.util.UUID.randomUUID().toString() + "." + java.util.UUID.randomUUID();
		var refreshTokenHash = tokenHasher.sha256Hex(refreshTokenValue);
		var refreshExpiresAt = now.plus(securityProperties.refreshTokenDays(), ChronoUnit.DAYS);
		refreshTokens.save(new RefreshToken(user.getId(), refreshTokenHash, refreshExpiresAt));

		return new AuthTokens(accessToken, refreshTokenValue, refreshExpiresAt);
	}

	@Transactional
	public AuthTokens refresh(String refreshTokenValue) {
		var now = Instant.now();
		var refreshTokenHash = tokenHasher.sha256Hex(refreshTokenValue);
		var token = refreshTokens.findByTokenHash(refreshTokenHash)
				.orElseThrow(() -> new BadCredentialsException("Invalid refresh token"));

		if (token.isRevoked() || token.isExpired(now)) {
			throw new BadCredentialsException("Invalid refresh token");
		}

		var user = users.findById(token.getUserId())
				.filter(UserAccount::isEnabled)
				.orElseThrow(() -> new BadCredentialsException("Invalid refresh token"));

		// Rotate refresh token
		token.revoke(now);
		refreshTokens.save(token);

		var accessToken = mintAccessToken(user, now);

		var newRefreshTokenValue = java.util.UUID.randomUUID().toString() + "." + java.util.UUID.randomUUID();
		var newRefreshTokenHash = tokenHasher.sha256Hex(newRefreshTokenValue);
		var refreshExpiresAt = now.plus(securityProperties.refreshTokenDays(), ChronoUnit.DAYS);
		refreshTokens.save(new RefreshToken(user.getId(), newRefreshTokenHash, refreshExpiresAt));

		return new AuthTokens(accessToken, newRefreshTokenValue, refreshExpiresAt);
	}

	private String mintAccessToken(UserAccount user, Instant now) {
		var roles = user.getRoles().stream().map(Enum::name).toList();
		var expiresAt = now.plus(securityProperties.accessTokenMinutes(), ChronoUnit.MINUTES);

		var claims = JwtClaimsSet.builder()
				.issuer(securityProperties.issuer())
				.issuedAt(now)
				.expiresAt(expiresAt)
				.subject(user.getId().toString())
				.claim("email", user.getEmail())
				.claim("roles", roles)
				.build();

		var header = JwsHeader.with(MacAlgorithm.HS256).build();
		return jwtEncoder.encode(JwtEncoderParameters.from(header, claims)).getTokenValue();
	}

	public record AuthTokens(String accessToken, String refreshToken, Instant refreshTokenExpiresAt) {}
}

