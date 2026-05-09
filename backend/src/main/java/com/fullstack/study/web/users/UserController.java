package com.fullstack.study.web.users;

import com.fullstack.study.application.CurrentUser;
import com.fullstack.study.application.UserAdminService;
import com.fullstack.study.domain.Role;
import com.fullstack.study.domain.UserAccount;
import com.fullstack.study.web.ApiPaths;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.server.ResponseStatusException;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@RestController
@RequestMapping(ApiPaths.API_V1 + "/users")
@PreAuthorize("hasAuthority('ROLE_ADMIN')")
public class UserController {

	private final UserAdminService userAdminService;
	private final CurrentUser currentUser;

	public UserController(UserAdminService userAdminService, CurrentUser currentUser) {
		this.userAdminService = userAdminService;
		this.currentUser = currentUser;
	}

	@GetMapping
	public List<UserResponse> list() {
		return userAdminService.listAll().stream().map(UserController::toResponse).toList();
	}

	@GetMapping("/{id}")
	public UserResponse get(@PathVariable UUID id) {
		return toResponse(userAdminService.get(id));
	}

	@PostMapping
	public ResponseEntity<UserResponse> create(@Valid @RequestBody UserCreateRequest request) {
		var roles = parseRoles(request.roles());
		var user = userAdminService.create(request.email(), request.password(), roles);
		return ResponseEntity.ok(toResponse(user));
	}

	@PatchMapping("/{id}")
	public UserResponse patch(@PathVariable UUID id, @Valid @RequestBody UserUpdateRequest request) {
		var roles = parseRoles(request.roles());
		var user = userAdminService.update(id, roles, request.enabled(), currentUser.requireUserId());
		return toResponse(user);
	}

	private static Set<Role> parseRoles(List<String> roleNames) {
		var out = new LinkedHashSet<Role>();
		for (var name : roleNames) {
			try {
				out.add(Role.valueOf(name.trim()));
			} catch (IllegalArgumentException ex) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid role: " + name);
			}
		}
		return out;
	}

	private static UserResponse toResponse(UserAccount u) {
		var roleNames = u.getRoles().stream().map(Enum::name).toList();
		return new UserResponse(u.getId(), u.getEmail(), u.isEnabled(), roleNames, u.getCreatedAt(), u.getUpdatedAt());
	}

	public record UserCreateRequest(
			@NotBlank @Email @Size(max = 320) String email,
			@NotBlank @Size(min = 8, max = 72) String password,
			@NotEmpty List<@NotBlank @Size(max = 50) String> roles
	) {}

	public record UserUpdateRequest(
			@NotNull Boolean enabled,
			@NotEmpty List<@NotBlank @Size(max = 50) String> roles
	) {}

	public record UserResponse(
			UUID id,
			String email,
			boolean enabled,
			List<String> roles,
			java.time.Instant createdAt,
			java.time.Instant updatedAt
	) {}
}
