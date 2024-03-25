package com.jshi.laughtale.viewhistory.repository;

import java.util.List;
import java.util.Optional;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.member.domain.Member;
import com.jshi.laughtale.viewhistory.domain.ViewHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ViewHistoryRepository extends JpaRepository<ViewHistory, Long> {

	Optional<ViewHistory> findByMemberAndChapter(Member member, Chapter chapter);

	Optional<List<ViewHistory>> findAllByMemberAndChapter(Member member, Chapter chapter);
}
