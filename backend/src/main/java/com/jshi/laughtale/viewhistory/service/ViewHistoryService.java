package com.jshi.laughtale.viewhistory.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.repository.ChapterRepository;
import com.jshi.laughtale.chapter.service.ChapterService;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.repository.MangaRepository;
import com.jshi.laughtale.member.domain.Member;
import com.jshi.laughtale.member.service.MemberService;
import com.jshi.laughtale.viewhistory.domain.ViewHistory;
import com.jshi.laughtale.viewhistory.mapper.ViewHistoryMapper;
import com.jshi.laughtale.viewhistory.repository.ViewHistoryRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ViewHistoryService {

	private final MemberService memberService;
	private final ChapterService chapterService;
	private final ViewHistoryRepository viewHistoryRepository;
	private final ChapterRepository chapterRepository;
	private final MangaRepository mangaRepository;

	public void createHistory(Long chapterId, Long userId) {
		Member member = memberService.findById(userId);
		Chapter chapter = chapterRepository.findById(chapterId).get();
		Manga manga = mangaRepository.findByChapter(chapter);

		if(viewHistoryRepository.findByChapter(chapter).isEmpty()){
			viewHistoryRepository.save(ViewHistoryMapper.toEntity(member, manga, chapter));
		}
	}

	public List<Long> getMangaChapterViewHistory(long memberId, long mangaId) {
		return
			viewHistoryRepository.findChaptersByMemberAndManga(memberId, mangaId);
	}

}
