package com.jshi.laughtale.chapter.service;

<<<<<<< HEAD
import com.jshi.laughtale.chapter.dto.ChapterListDto;
import com.jshi.laughtale.chapter.mapper.ChapterMapper;
=======
import com.jshi.laughtale.chapter.domain.Chapter;
>>>>>>> b4f6e56 (feat : view cartoon)
import com.jshi.laughtale.chapter.repository.ChapterRepository;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.service.MangaService;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ChapterService {

<<<<<<< HEAD
	private final ChapterRepository chapterRepository;
	private final MangaService mangaService;
	public Page<ChapterListDto.Response> getChaptersFromManga(Long mangaId, int pageNo, int size) {
		Manga manga = mangaService.findById(mangaId);
		Pageable pageable = PageRequest.of(pageNo, size);
		return chapterRepository.findAllByMangaOrderByChapterNoAsc(manga, pageable).map(ChapterMapper::chapterToChapterListDto);
	}

=======
    private final ChapterRepository chapterRepository;

    public Chapter findById(Long chapterId) {
        Optional<Chapter> chapter = chapterRepository.findById(chapterId);
        if (chapter.isPresent()) {
            return chapter.get();
        } else {
            throw new RuntimeException("Chapter not found with id: " + chapterId);
        }
    }
>>>>>>> b4f6e56 (feat : view cartoon)
}
