package com.fullstack.study.application;

import com.fullstack.study.domain.Item;
import com.fullstack.study.infrastructure.ItemRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class ItemService {

	private final ItemRepository items;
	private final CurrentUser currentUser;

	public ItemService(ItemRepository items, CurrentUser currentUser) {
		this.items = items;
		this.currentUser = currentUser;
	}

	@Transactional(readOnly = true)
	public List<Item> list() {
		if (currentUser.hasRole("ROLE_ADMIN")) {
			return items.findAll();
		}
		return items.findAllByOwnerId(currentUser.requireUserId());
	}

	@Transactional(readOnly = true)
	public Item get(UUID id) {
		var item = items.findById(id).orElseThrow();
		if (currentUser.hasRole("ROLE_ADMIN")) {
			return item;
		}
		if (!item.getOwnerId().equals(currentUser.requireUserId())) {
			throw new AccessDeniedException("Not allowed");
		}
		return item;
	}

	@Transactional
	public Item create(String name, String description) {
		var ownerId = currentUser.requireUserId();
		return items.save(new Item(name, description, ownerId));
	}

	@Transactional
	public Item update(UUID id, String name, String description) {
		var item = get(id);
		item.setName(name);
		item.setDescription(description);
		return items.save(item);
	}

	@Transactional
	public void delete(UUID id) {
		var item = get(id);
		items.delete(item);
	}
}

