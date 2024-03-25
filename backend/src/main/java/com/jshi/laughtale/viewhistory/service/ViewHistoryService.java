package com.jshi.laughtale.viewhistory.service;

import java.util.List;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.service.ChapterService;
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

    public void createHistory(String title, Integer chapterNo, Long userId) {
        Member member = memberService.findById(userId);
        Chapter chapter = chapterService.loadByTitleAndChapterNo(title, chapterNo);
        List<ViewHistory> existingHistories = viewHistoryRepository.findAllByMemberAndChapter(member, chapter).orElse(null);
        if (existingHistories == null || existingHistories.isEmpty()) {
            viewHistoryRepository.save(ViewHistoryMapper.toEntity(member, chapter));
        }

    }
}
