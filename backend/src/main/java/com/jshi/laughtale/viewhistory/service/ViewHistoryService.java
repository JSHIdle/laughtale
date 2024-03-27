package com.jshi.laughtale.viewhistory.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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
        Optional<List<ViewHistory>> existingHistoriesOptional = viewHistoryRepository.findAllByMemberAndChapter(member, chapter);
        // if (existingHistories == null || existingHistories.isEmpty()) {
        //     viewHistoryRepository.save(ViewHistoryMapper.toEntity(member, chapter));
        // }
        if (existingHistoriesOptional.isPresent() && !existingHistoriesOptional.get().isEmpty()) {
            List<ViewHistory> existingHistories = existingHistoriesOptional.get();

            // Update the date of existing history entries to the current date
            for (ViewHistory history : existingHistories) {
                history.setViewDate(LocalDateTime.now());
            }

            // Save the updated histories back to the repository
            viewHistoryRepository.saveAll(existingHistories);
        } else {
            // If no existing histories, create a new history entry
            viewHistoryRepository.save(ViewHistoryMapper.toEntity(member, chapter));
        }
    }
}
