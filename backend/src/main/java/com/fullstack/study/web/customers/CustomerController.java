package com.fullstack.study.web.customers;

import com.fullstack.study.application.CustomerService;
import com.fullstack.study.domain.Customer;
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
@RequestMapping(ApiPaths.API_V1 + "/customers")
public class CustomerController {

	private final CustomerService customerService;

	public CustomerController(CustomerService customerService) {
		this.customerService = customerService;
	}

	@GetMapping
	public List<CustomerResponse> list() {
		return customerService.list().stream().map(CustomerController::toResponse).toList();
	}

	@GetMapping("/{id}")
	public CustomerResponse get(@PathVariable UUID id) {
		return toResponse(customerService.get(id));
	}

	@PostMapping
	public ResponseEntity<CustomerResponse> create(@Valid @RequestBody CustomerUpsertRequest request) {
		var customer = customerService.create(request.name(), request.email(), request.phone(), request.document());
		return ResponseEntity.ok(toResponse(customer));
	}

	@PutMapping("/{id}")
	public CustomerResponse update(@PathVariable UUID id, @Valid @RequestBody CustomerUpsertRequest request) {
		return toResponse(customerService.update(id, request.name(), request.email(), request.phone(), request.document()));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable UUID id) {
		customerService.delete(id);
		return ResponseEntity.noContent().build();
	}

	private static CustomerResponse toResponse(Customer c) {
		return new CustomerResponse(
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

	public record CustomerUpsertRequest(
			@NotBlank @Size(max = 200) String name,
			@NotBlank @Email @Size(max = 320) String email,
			@NotBlank @Size(max = 30) String phone,
			@NotBlank @Size(max = 18) String document
	) {}

	public record CustomerResponse(
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
