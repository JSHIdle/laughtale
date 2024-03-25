package com.jshi.laughtale.chapter.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.dto.ChapterListDto;
import com.jshi.laughtale.chapter.mapper.ChapterMapper;
import com.jshi.laughtale.chapter.repository.ChapterRepository;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.service.MangaService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChapterService {


	private final ChapterRepository chapterRepository;
	private final MangaService mangaService;
	public Page<ChapterListDto.Response> getChaptersFromManga(Long mangaId, int pageNo, int size) {
		Manga manga = mangaService.findById(mangaId);
		log.info(manga.getTitle());
		Pageable pageable = PageRequest.of(pageNo, size);
		log.info(pageable.toString());
		return chapterRepository.findAllByMangaOrderByChapterNoAsc(manga, pageable).map(ChapterMapper::chapterToChapterListDto);
	}


    public Chapter findById(Long chapterId) {
        Optional<Chapter> chapter = chapterRepository.findById(chapterId);
        if (chapter.isPresent()) {
            return chapter.get();
        } else {
            throw new RuntimeException("Chapter not found with id: " + chapterId);
        }
    }

}
