package com.fullstack.study.application;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CustomerServiceNormalizeSearchTest {

	@Test
	void emptyWhenNullOrBlank() {
		assertEquals("", CustomerService.normalizeSearch(null));
		assertEquals("", CustomerService.normalizeSearch("   "));
	}

	@Test
	void trimsAndRemovesLikeWildcards() {
		assertEquals("ab", CustomerService.normalizeSearch(" a%b_ "));
		assertEquals("x", CustomerService.normalizeSearch("x\\"));
	}

	@Test
	void capsLength() {
		String longInput = "x".repeat(250);
		assertEquals(200, CustomerService.normalizeSearch(longInput).length());
	}
}
