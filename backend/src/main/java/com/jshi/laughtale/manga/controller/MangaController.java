package com.jshi.laughtale.manga.controller;

import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.dto.LevelManga;
import com.jshi.laughtale.manga.dto.MangaInfo;
import com.jshi.laughtale.manga.dto.MangaUpload;
import com.jshi.laughtale.manga.dto.RecentManga;
import com.jshi.laughtale.manga.service.MangaService;
import com.jshi.laughtale.security.details.CustomUserDetails;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/manga")
public class MangaController {

	private final MangaService mangaService;

	@PostMapping("/upload")
	public ResponseEntity<Void> upload(
		@RequestPart MultipartFile thumbnail,
		@RequestPart MangaUpload.Request manga,
		@RequestPart List<MultipartFile> files
	) throws IOException {
		mangaService.upload(thumbnail, manga, files);
		return ResponseEntity.ok().build();
	}

	@GetMapping("/recent")
	public ResponseEntity<List<RecentManga.Response>> getRecentManga(
		@AuthenticationPrincipal CustomUserDetails customUserDetails) {

		List<RecentManga.Response> mangaList = mangaService.getRecentManga(customUserDetails.getId());
		return ResponseEntity.ok(mangaList);
	}

	@GetMapping("/level")
	public ResponseEntity<List<Page<LevelManga.Response>>> getLevelManga() {
		List<Page<LevelManga.Response>> mangaList = new ArrayList<>();
		for (int i = 1; i <= 5; i++) {
			Page<LevelManga.Response> mangaListByLevel = mangaService.getLevelManga(i, 1, 4);
			mangaList.add(mangaListByLevel);
		}
		return ResponseEntity.ok(mangaList);
	}

	@GetMapping("/level/{level}/{page}")
	public ResponseEntity<Page<LevelManga.Response>> getMangaByLevel(
		@PathVariable Integer level,
		@PathVariable Integer page) {
		return ResponseEntity.ok(mangaService.getLevelManga(level, page, page + 10));
	}


	@GetMapping("/info/{id}")
	public ResponseEntity<MangaInfo.Response> getMangaInfo(
		@PathVariable Long id) {
		Manga manga = mangaService.getMangaInfo(id);
		return ResponseEntity.ok(MangaInfo.Response.builder()
			.id(manga.getId())
			.title(manga.getTitle())
			.category(manga.getCategory())
			.author(manga.getAuthor())
			.summary(manga.getDescription())
			.thumbnail(manga.getThumbnail())
			.level(manga.getLevel())
			.build());
	}

}
