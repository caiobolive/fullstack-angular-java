package com.fullstack.study.infrastructure;

import com.fullstack.study.domain.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID> {
	Page<Customer> findAllByOwnerId(UUID ownerId, Pageable pageable);

	@Query("""
			SELECT c FROM Customer c WHERE
				LOWER(c.name) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.email) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.phone) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.document) LIKE LOWER(CONCAT('%', :term, '%'))
			ORDER BY c.name ASC
			""")
	Page<Customer> searchAll(@Param("term") String term, Pageable pageable);

	@Query("""
			SELECT c FROM Customer c WHERE c.ownerId = :ownerId AND (
				LOWER(c.name) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.email) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.phone) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.document) LIKE LOWER(CONCAT('%', :term, '%'))
			)
			ORDER BY c.name ASC
			""")
	Page<Customer> searchByOwnerId(@Param("ownerId") UUID ownerId, @Param("term") String term, Pageable pageable);
}
