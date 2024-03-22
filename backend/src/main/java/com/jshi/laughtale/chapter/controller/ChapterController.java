package com.jshi.laughtale.chapter.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.jshi.laughtale.chapter.domain.Chapter;
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
		@RequestParam("page") int pageNo,
		@RequestParam("mangaid") Long mangaId) {
		return ResponseEntity.ok(chapterService.getChaptersFromManga(mangaId, pageNo));
	}
}
