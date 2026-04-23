package com.fullstack.study.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app.security.jwt")
public record SecurityProperties(
		String issuer,
		Integer accessTokenMinutes,
		Integer refreshTokenDays,
		String hmacSecret
) {
}

