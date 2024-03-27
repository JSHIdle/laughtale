package com.jshi.laughtale.chapter.service;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.dto.ChapterLevelDto;
import com.jshi.laughtale.chapter.dto.ChapterListDto;
import com.jshi.laughtale.chapter.exception.ChapterNotFoundException;
import com.jshi.laughtale.chapter.mapper.ChapterMapper;
import com.jshi.laughtale.chapter.repository.ChapterRepository;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.service.MangaService;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ChapterService {

	private final ChapterRepository chapterRepository;
	private final MangaService mangaService;

	public Page<ChapterListDto.Response> getChaptersFromManga(Long mangaId, int pageNo, int size) {
		Manga manga = mangaService.findById(mangaId);
		Pageable pageable = PageRequest.of(pageNo, size);
		return chapterRepository.findAllByMangaOrderByChapterNoDesc(manga, pageable)
			.map(ChapterMapper::chapterToChapterListDto);
	}

	public Chapter loadByTitleAndChapterNo(String title, Integer chapterNo) {
		return chapterRepository.findChapterByMangaTitleAndChapterNo(title, chapterNo)
			.orElseThrow(ChapterNotFoundException::new);
	}

	public Chapter findById(Long chapterId) {
		Optional<Chapter> chapter = chapterRepository.findById(chapterId);
		if (chapter.isPresent()) {
			return chapter.get();
		} else {
			throw new RuntimeException("Chapter not found with id: " + chapterId);
		}
	}

	public List<ChapterLevelDto.Response> getChapterLevels(Long mangaId) {

		return chapterRepository.findAllByMangaId(mangaId).stream().map(ChapterMapper::chapterToChapterLevelDto)
			.toList();

	}
}
