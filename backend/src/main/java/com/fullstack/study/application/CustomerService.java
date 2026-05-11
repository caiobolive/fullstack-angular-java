package com.fullstack.study.application;

import com.fullstack.study.domain.Customer;
import com.fullstack.study.infrastructure.CustomerRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	public Page<Customer> listPaged(String query, int page, int size) {
		int safePage = Math.max(0, page);
		int safeSize = Math.min(100, Math.max(1, size));
		String term = normalizeSearch(query);
		var sort = term.isEmpty() ? Sort.by(Sort.Direction.ASC, "name") : Sort.unsorted();
		var pageable = PageRequest.of(safePage, safeSize, sort);
		if (term.isEmpty()) {
			if (currentUser.hasRole("ROLE_ADMIN")) {
				return customerRepository.findAll(pageable);
			}
			return customerRepository.findAllByOwnerId(currentUser.requireUserId(), pageable);
		}
		if (currentUser.hasRole("ROLE_ADMIN")) {
			return customerRepository.searchAll(term, pageable);
		}
		return customerRepository.searchByOwnerId(currentUser.requireUserId(), term, pageable);
	}

	/** Remove curingas LIKE (% _) e limita tamanho para evitar consultas abusivas. */
	static String normalizeSearch(String raw) {
		if (raw == null) {
			return "";
		}
		String t = raw.trim();
		if (t.length() > 200) {
			t = t.substring(0, 200);
		}
		return t.replace("\\", "").replace("%", "").replace("_", "");
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
