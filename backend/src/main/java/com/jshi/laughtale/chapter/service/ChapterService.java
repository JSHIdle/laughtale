package com.jshi.laughtale.chapter.service;

import com.jshi.laughtale.chapter.dto.ChapterListDto;
import com.jshi.laughtale.chapter.mapper.ChapterMapper;
import com.jshi.laughtale.chapter.repository.ChapterRepository;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.service.MangaService;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChapterService {

	private final ChapterRepository chapterRepository;
	private final MangaService mangaService;
	public Page<ChapterListDto.Response> getChaptersFromManga(Long mangaId, int pageNo) {
		Manga manga = mangaService.findById(mangaId);
		Pageable pageable = PageRequest.of(pageNo, 20);
		return chapterRepository.findAllByMangaOrderByChapterNoAsc(manga, pageable).map(ChapterMapper::chapterToChapterListDto);
	}

}
