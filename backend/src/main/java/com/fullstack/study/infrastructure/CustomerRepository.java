package com.fullstack.study.infrastructure;

import com.fullstack.study.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID> {
	List<Customer> findAllByOwnerId(UUID ownerId);
}
