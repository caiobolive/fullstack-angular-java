package com.fullstack.study.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "customers")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	@Column(nullable = false, length = 200)
	private String name;

	@Column(nullable = false, length = 320)
	private String email;

	@Column(nullable = false, length = 30)
	private String phone;

	@Column(nullable = false, length = 18)
	private String document;

	@Column(name = "owner_id", nullable = false)
	private UUID ownerId;

	@Column(name = "created_at", nullable = false)
	private Instant createdAt = Instant.now();

	@Column(name = "updated_at", nullable = false)
	private Instant updatedAt = Instant.now();

	protected Customer() {}

	public Customer(String name, String email, String phone, String document, UUID ownerId) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.document = document;
		this.ownerId = ownerId;
	}

	public UUID getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getPhone() {
		return phone;
	}

	public String getDocument() {
		return document;
	}

	public UUID getOwnerId() {
		return ownerId;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public Instant getUpdatedAt() {
		return updatedAt;
	}

	public void setName(String name) {
		this.name = name;
		this.updatedAt = Instant.now();
	}

	public void setEmail(String email) {
		this.email = email;
		this.updatedAt = Instant.now();
	}

	public void setPhone(String phone) {
		this.phone = phone;
		this.updatedAt = Instant.now();
	}

	public void setDocument(String document) {
		this.document = document;
		this.updatedAt = Instant.now();
	}
}
