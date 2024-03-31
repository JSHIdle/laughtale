package com.jshi.laughtale.chapter.controller;

import java.util.List;
import java.util.Optional;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.dto.ChapterPaginationDto;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jshi.laughtale.chapter.dto.ChapterLevelDto;
import com.jshi.laughtale.chapter.dto.ChapterListDto;
import com.jshi.laughtale.chapter.service.ChapterService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/chapter")
public class ChapterController {
	private final ChapterService chapterService;

	@GetMapping("/list")
	public ResponseEntity<Page<ChapterListDto.Response>> getMangaChapters(
		@RequestParam(defaultValue = "0") int page,
		@RequestParam(defaultValue = "20") int size,
		@RequestParam("mangaid") long mangaid) {
		return ResponseEntity.ok(chapterService.getChaptersFromManga(mangaid, page, size));
	}

	@GetMapping("/levels")
	public ResponseEntity<List<ChapterLevelDto.Response>> getChapterLevels(@RequestParam("mangaId") long mangaId){
		return ResponseEntity.ok(chapterService.getChapterLevels(mangaId));
	}

	@GetMapping("/{chapterId}")
	public ResponseEntity<?> getChapterPagination(
		@PathVariable Long chapterId
	){
		List<Integer> pagination = chapterService.getChapterPagination(chapterId);

		return ResponseEntity.ok(ChapterPaginationDto
			.Response
			.builder()
			.nextPage(pagination.get(1))
			.prevPage(pagination.get(0))
			.build());
	}
}
