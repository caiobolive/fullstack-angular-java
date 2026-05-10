package com.fullstack.study.infrastructure;

import com.fullstack.study.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID> {
	List<Customer> findAllByOwnerId(UUID ownerId);

	@Query("""
			SELECT c FROM Customer c WHERE
				LOWER(c.name) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.email) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.phone) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.document) LIKE LOWER(CONCAT('%', :term, '%'))
			ORDER BY c.name ASC
			""")
	List<Customer> searchAll(@Param("term") String term);

	@Query("""
			SELECT c FROM Customer c WHERE c.ownerId = :ownerId AND (
				LOWER(c.name) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.email) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.phone) LIKE LOWER(CONCAT('%', :term, '%'))
				OR LOWER(c.document) LIKE LOWER(CONCAT('%', :term, '%'))
			)
			ORDER BY c.name ASC
			""")
	List<Customer> searchByOwnerId(@Param("ownerId") UUID ownerId, @Param("term") String term);
}
