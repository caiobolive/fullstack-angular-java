package com.fullstack.study.infrastructure;

import com.fullstack.study.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ItemRepository extends JpaRepository<Item, UUID> {
}

