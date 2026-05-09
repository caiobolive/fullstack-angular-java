package com.fullstack.study.web.clients;

import com.fullstack.study.application.ClientService;
import com.fullstack.study.domain.Client;
import com.fullstack.study.web.ApiPaths;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(ApiPaths.API_V1 + "/clients")
public class ClientController {

	private final ClientService clientService;

	public ClientController(ClientService clientService) {
		this.clientService = clientService;
	}

	@GetMapping
	public List<ClientResponse> list() {
		return clientService.list().stream().map(ClientController::toResponse).toList();
	}

	@GetMapping("/{id}")
	public ClientResponse get(@PathVariable UUID id) {
		return toResponse(clientService.get(id));
	}

	@PostMapping
	public ResponseEntity<ClientResponse> create(@Valid @RequestBody ClientUpsertRequest request) {
		var client = clientService.create(request.name(), request.email(), request.phone(), request.document());
		return ResponseEntity.ok(toResponse(client));
	}

	@PutMapping("/{id}")
	public ClientResponse update(@PathVariable UUID id, @Valid @RequestBody ClientUpsertRequest request) {
		return toResponse(clientService.update(id, request.name(), request.email(), request.phone(), request.document()));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable UUID id) {
		clientService.delete(id);
		return ResponseEntity.noContent().build();
	}

	private static ClientResponse toResponse(Client c) {
		return new ClientResponse(
				c.getId(),
				c.getName(),
				c.getEmail(),
				c.getPhone(),
				c.getDocument(),
				c.getOwnerId(),
				c.getCreatedAt(),
				c.getUpdatedAt()
		);
	}

	public record ClientUpsertRequest(
			@NotBlank @Size(max = 200) String name,
			@NotBlank @Email @Size(max = 320) String email,
			@NotBlank @Size(max = 30) String phone,
			@NotBlank @Size(max = 18) String document
	) {}

	public record ClientResponse(
			UUID id,
			String name,
			String email,
			String phone,
			String document,
			UUID ownerId,
			java.time.Instant createdAt,
			java.time.Instant updatedAt
	) {}
}
