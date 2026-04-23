package com.fullstack.study.web.auth;

import com.fullstack.study.application.AuthService;
import com.fullstack.study.web.ApiPaths;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping(ApiPaths.API_V1 + "/auth")
public class AuthController {

	private final AuthService authService;

	public AuthController(AuthService authService) {
		this.authService = authService;
	}

	@PostMapping("/login")
	public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
		var tokens = authService.login(request.email(), request.password());
		return ResponseEntity.ok(new AuthResponse(tokens.accessToken(), tokens.refreshToken(), tokens.refreshTokenExpiresAt()));
	}

	@PostMapping("/refresh")
	public ResponseEntity<AuthResponse> refresh(@Valid @RequestBody RefreshRequest request) {
		var tokens = authService.refresh(request.refreshToken());
		return ResponseEntity.ok(new AuthResponse(tokens.accessToken(), tokens.refreshToken(), tokens.refreshTokenExpiresAt()));
	}

	public record LoginRequest(
			@NotBlank String email,
			@NotBlank String password
	) {}

	public record RefreshRequest(
			@NotBlank String refreshToken
	) {}

	public record AuthResponse(
			@NotNull String accessToken,
			@NotNull String refreshToken,
			@NotNull Instant refreshTokenExpiresAt
	) {}
}

