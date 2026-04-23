package com.fullstack.study.domain;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "users")
public class UserAccount {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	@Column(nullable = false, unique = true, length = 320)
	private String email;

	@Column(name = "password_hash", nullable = false, length = 255)
	private String passwordHash;

	@Column(nullable = false)
	private boolean enabled = true;

	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
	@Enumerated(EnumType.STRING)
	@Column(name = "role", nullable = false, length = 50)
	private Set<Role> roles = new HashSet<>();

	@Column(name = "created_at", nullable = false)
	private Instant createdAt = Instant.now();

	@Column(name = "updated_at", nullable = false)
	private Instant updatedAt = Instant.now();

	protected UserAccount() {}

	public UserAccount(String email, String passwordHash, Set<Role> roles) {
		this.email = email;
		this.passwordHash = passwordHash;
		this.roles = roles == null ? new HashSet<>() : new HashSet<>(roles);
	}

	public UUID getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public Instant getUpdatedAt() {
		return updatedAt;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
		this.updatedAt = Instant.now();
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
		this.updatedAt = Instant.now();
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles == null ? new HashSet<>() : new HashSet<>(roles);
		this.updatedAt = Instant.now();
	}
}

