package com.fullstack.study.application;

import com.fullstack.study.domain.Customer;
import com.fullstack.study.infrastructure.CustomerRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class CustomerService {

	private final CustomerRepository customerRepository;
	private final CurrentUser currentUser;

	public CustomerService(CustomerRepository customerRepository, CurrentUser currentUser) {
		this.customerRepository = customerRepository;
		this.currentUser = currentUser;
	}

	@Transactional(readOnly = true)
	public List<Customer> list() {
		if (currentUser.hasRole("ROLE_ADMIN")) {
			return customerRepository.findAll();
		}
		return customerRepository.findAllByOwnerId(currentUser.requireUserId());
	}

	@Transactional(readOnly = true)
	public Customer get(UUID id) {
		var customer = customerRepository.findById(id).orElseThrow();
		if (currentUser.hasRole("ROLE_ADMIN")) {
			return customer;
		}
		if (!customer.getOwnerId().equals(currentUser.requireUserId())) {
			throw new AccessDeniedException("Not allowed");
		}
		return customer;
	}

	@Transactional
	public Customer create(String name, String email, String phone, String document) {
		var ownerId = currentUser.requireUserId();
		return customerRepository.save(new Customer(name, email, phone, document, ownerId));
	}

	@Transactional
	public Customer update(UUID id, String name, String email, String phone, String document) {
		var customer = get(id);
		customer.setName(name);
		customer.setEmail(email);
		customer.setPhone(phone);
		customer.setDocument(document);
		return customerRepository.save(customer);
	}

	@Transactional
	public void delete(UUID id) {
		var customer = get(id);
		customerRepository.delete(customer);
	}
}
