package com.fullstack.study.infrastructure;

import com.fullstack.study.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ClientRepository extends JpaRepository<Client, UUID> {
	List<Client> findAllByOwnerId(UUID ownerId);
}
