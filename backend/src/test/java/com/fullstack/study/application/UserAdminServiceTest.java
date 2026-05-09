package com.fullstack.study.application;

import com.fullstack.study.domain.Role;
import com.fullstack.study.domain.UserAccount;
import com.fullstack.study.infrastructure.UserAccountRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserAdminServiceTest {

	@Mock
	UserAccountRepository users;

	@Mock
	PasswordEncoder passwordEncoder;

	@InjectMocks
	UserAdminService service;

	@Test
	void create_hashesPasswordAndSaves() {
		when(users.existsByEmailIgnoreCase("a@b.com")).thenReturn(false);
		when(passwordEncoder.encode("secret123")).thenReturn("HASH");
		when(users.save(any(UserAccount.class))).thenAnswer(invocation -> invocation.getArgument(0));

		var created = service.create("A@B.com", "secret123", Set.of(Role.ROLE_USER));

		assertEquals("a@b.com", created.getEmail());
		assertEquals("HASH", created.getPasswordHash());
		assertTrue(created.getRoles().contains(Role.ROLE_USER));

		var captor = ArgumentCaptor.forClass(UserAccount.class);
		verify(users).save(captor.capture());
		assertEquals("a@b.com", captor.getValue().getEmail());
	}

	@Test
	void create_duplicateEmail_conflict() {
		when(users.existsByEmailIgnoreCase("x@y.com")).thenReturn(true);
		assertThrows(ResponseStatusException.class, () -> service.create("x@y.com", "secret123", Set.of(Role.ROLE_USER)));
	}

	@Test
	void update_appliesRolesAndEnabled() {
		var id = UUID.randomUUID();
		var user = new UserAccount("u@x.com", "hash", Set.of(Role.ROLE_USER));
		ReflectionTestUtils.setField(user, "id", id);
		when(users.findById(id)).thenReturn(Optional.of(user));
		when(users.save(any(UserAccount.class))).thenAnswer(invocation -> invocation.getArgument(0));

		var actor = UUID.randomUUID();
		var updated = service.update(id, Set.of(Role.ROLE_ADMIN, Role.ROLE_USER), false, actor);

		assertEquals(false, updated.isEnabled());
		assertTrue(updated.getRoles().contains(Role.ROLE_ADMIN));
	}

	@Test
	void update_cannotDisableSelf() {
		var id = UUID.randomUUID();
		var user = new UserAccount("me@x.com", "hash", Set.of(Role.ROLE_ADMIN));
		ReflectionTestUtils.setField(user, "id", id);
		when(users.findById(id)).thenReturn(Optional.of(user));

		assertThrows(ResponseStatusException.class, () -> service.update(id, Set.of(Role.ROLE_ADMIN), false, id));
	}

	@Test
	void update_cannotStripOwnAdmin() {
		var id = UUID.randomUUID();
		var user = new UserAccount("me@x.com", "hash", Set.of(Role.ROLE_ADMIN));
		ReflectionTestUtils.setField(user, "id", id);
		when(users.findById(id)).thenReturn(Optional.of(user));

		assertThrows(ResponseStatusException.class, () -> service.update(id, Set.of(Role.ROLE_USER), true, id));
	}
}
