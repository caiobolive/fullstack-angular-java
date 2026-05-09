package com.fullstack.study.application;

import com.fullstack.study.domain.Client;
import com.fullstack.study.infrastructure.ClientRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class ClientService {

	private final ClientRepository clients;
	private final CurrentUser currentUser;

	public ClientService(ClientRepository clients, CurrentUser currentUser) {
		this.clients = clients;
		this.currentUser = currentUser;
	}

	@Transactional(readOnly = true)
	public List<Client> list() {
		if (currentUser.hasRole("ROLE_ADMIN")) {
			return clients.findAll();
		}
		return clients.findAllByOwnerId(currentUser.requireUserId());
	}

	@Transactional(readOnly = true)
	public Client get(UUID id) {
		var client = clients.findById(id).orElseThrow();
		if (currentUser.hasRole("ROLE_ADMIN")) {
			return client;
		}
		if (!client.getOwnerId().equals(currentUser.requireUserId())) {
			throw new AccessDeniedException("Not allowed");
		}
		return client;
	}

	@Transactional
	public Client create(String name, String email, String phone, String document) {
		var ownerId = currentUser.requireUserId();
		return clients.save(new Client(name, email, phone, document, ownerId));
	}

	@Transactional
	public Client update(UUID id, String name, String email, String phone, String document) {
		var client = get(id);
		client.setName(name);
		client.setEmail(email);
		client.setPhone(phone);
		client.setDocument(document);
		return clients.save(client);
	}

	@Transactional
	public void delete(UUID id) {
		var client = get(id);
		clients.delete(client);
	}
}
