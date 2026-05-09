package com.fullstack.study.application;

import com.fullstack.study.domain.Role;
import com.fullstack.study.domain.UserAccount;
import com.fullstack.study.infrastructure.UserAccountRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
public class UserAdminService {

	private final UserAccountRepository users;
	private final PasswordEncoder passwordEncoder;

	public UserAdminService(UserAccountRepository users, PasswordEncoder passwordEncoder) {
		this.users = users;
		this.passwordEncoder = passwordEncoder;
	}

	@Transactional(readOnly = true)
	public List<UserAccount> listAll() {
		return users.findAllByOrderByEmailAsc();
	}

	@Transactional
	public UserAccount create(String email, String password, Set<Role> roles) {
		var normalized = email.trim().toLowerCase();
		if (users.existsByEmailIgnoreCase(normalized)) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already registered");
		}
		if (roles == null || roles.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "At least one role is required");
		}
		var user = new UserAccount(normalized, passwordEncoder.encode(password), roles);
		return users.save(user);
	}

	@Transactional(readOnly = true)
	public UserAccount get(UUID id) {
		return users.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
	}

	/**
	 * Updates roles and enabled flag. Prevents admins from disabling themselves or removing their own {@code ROLE_ADMIN}.
	 */
	@Transactional
	public UserAccount update(UUID id, Set<Role> roles, boolean enabled, UUID actorId) {
		if (roles == null || roles.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "At least one role is required");
		}
		var user = get(id);
		if (id.equals(actorId)) {
			if (!enabled) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cannot disable your own account");
			}
			if (!roles.contains(Role.ROLE_ADMIN)) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cannot remove admin role from yourself");
			}
		}
		user.setRoles(roles);
		user.setEnabled(enabled);
		return users.save(user);
	}
}
