package com.fullstack.study.config;

import com.fullstack.study.domain.Role;
import com.fullstack.study.domain.UserAccount;
import com.fullstack.study.infrastructure.UserAccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@Configuration
@Profile("dev")
public class DevSeedConfig {

	@Bean
	CommandLineRunner seedAdmin(UserAccountRepository users, PasswordEncoder passwordEncoder) {
		return args -> {
			var email = System.getenv().getOrDefault("APP_SEED_ADMIN_EMAIL", "admin@example.com");
			var password = System.getenv().getOrDefault("APP_SEED_ADMIN_PASSWORD", "admin123");

			var existing = users.findByEmailIgnoreCase(email);
			if (existing.isPresent()) {
				var user = existing.get();
				user.setPasswordHash(passwordEncoder.encode(password));
				user.setEnabled(true);
				user.setRoles(Set.of(Role.ROLE_ADMIN));
				users.save(user);
				return;
			}

			users.save(new UserAccount(email, passwordEncoder.encode(password), Set.of(Role.ROLE_ADMIN)));
		};
	}
}

