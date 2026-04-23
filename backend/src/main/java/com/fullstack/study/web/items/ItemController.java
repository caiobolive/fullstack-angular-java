package com.fullstack.study.web.items;

import com.fullstack.study.application.ItemService;
import com.fullstack.study.domain.Item;
import com.fullstack.study.web.ApiPaths;
import jakarta.validation.Valid;
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
@RequestMapping(ApiPaths.API_V1 + "/items")
public class ItemController {

	private final ItemService itemService;

	public ItemController(ItemService itemService) {
		this.itemService = itemService;
	}

	@GetMapping
	public List<ItemResponse> list() {
		return itemService.list().stream().map(ItemController::toResponse).toList();
	}

	@GetMapping("/{id}")
	public ItemResponse get(@PathVariable UUID id) {
		return toResponse(itemService.get(id));
	}

	@PostMapping
	public ResponseEntity<ItemResponse> create(@Valid @RequestBody ItemUpsertRequest request) {
		var item = itemService.create(request.name(), request.description());
		return ResponseEntity.ok(toResponse(item));
	}

	@PutMapping("/{id}")
	public ItemResponse update(@PathVariable UUID id, @Valid @RequestBody ItemUpsertRequest request) {
		return toResponse(itemService.update(id, request.name(), request.description()));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable UUID id) {
		itemService.delete(id);
		return ResponseEntity.noContent().build();
	}

	private static ItemResponse toResponse(Item item) {
		return new ItemResponse(item.getId(), item.getName(), item.getDescription(), item.getOwnerId());
	}

	public record ItemUpsertRequest(
			@NotBlank @Size(max = 200) String name,
			@Size(max = 2000) String description
	) {}

	public record ItemResponse(
			UUID id,
			String name,
			String description,
			UUID ownerId
	) {}
}

