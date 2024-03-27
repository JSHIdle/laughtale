package com.jshi.laughtale.viewhistory.controller;

import java.util.ArrayList;
import java.util.List;

import com.jshi.laughtale.security.details.CustomUserDetails;
import com.jshi.laughtale.viewhistory.dto.ChapterHistoryDto;
import com.jshi.laughtale.viewhistory.service.ViewHistoryService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/history")
@RequiredArgsConstructor
public class ViewHistoryController {

	private final ViewHistoryService viewHistoryService;

	@PostMapping("/{title}/{chapterNo}")
	public ResponseEntity<Void> createHistory(
		@PathVariable String title,
		@PathVariable Integer chapterNo,
		@AuthenticationPrincipal CustomUserDetails customUserDetails) {
		viewHistoryService.createHistory(title, chapterNo, customUserDetails.getId());
		return ResponseEntity.ok().build();
	}

	@GetMapping("/{mangaId}")
	public ResponseEntity<ChapterHistoryDto.Response> getViewHistory(
		@AuthenticationPrincipal CustomUserDetails customUserDetails,
		@PathVariable long mangaId
	) {
		List<Long> chaptersViewed = viewHistoryService.getMangaChapterViewHistory(customUserDetails.getId(), mangaId);
		ChapterHistoryDto.Response response =
			ChapterHistoryDto.Response
				.builder()
				.memberId(customUserDetails.getId())
				.mangaId(mangaId)
				.chaptersViewed(chaptersViewed)
				.build();
		return ResponseEntity.ok(response);
	}
}
