package com.fullstack.study.application;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class CurrentUser {

	public UUID requireUserId() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth instanceof JwtAuthenticationToken jwtAuth) {
			return UUID.fromString(jwtAuth.getName());
		}
		throw new IllegalStateException("Expected JWT authentication");
	}

	public boolean hasRole(String role) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth == null) return false;
		return auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals(role));
	}
}

