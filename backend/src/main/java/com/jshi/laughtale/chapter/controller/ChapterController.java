package com.jshi.laughtale.chapter.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}