package com.fullstack.study.application;

import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

@Component
public class TokenHasher {

	public String sha256Hex(String value) {
		try {
			var md = MessageDigest.getInstance("SHA-256");
			var digest = md.digest(value.getBytes(StandardCharsets.UTF_8));
			return toHex(digest);
		} catch (Exception e) {
			throw new IllegalStateException("Unable to hash token", e);
		}
	}

	private static String toHex(byte[] bytes) {
		var sb = new StringBuilder(bytes.length * 2);
		for (byte b : bytes) {
			sb.append(Character.forDigit((b >> 4) & 0xF, 16));
			sb.append(Character.forDigit(b & 0xF, 16));
		}
		return sb.toString();
	}
}

