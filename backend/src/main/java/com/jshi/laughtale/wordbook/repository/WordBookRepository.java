package com.jshi.laughtale.wordbook.repository;

import com.jshi.laughtale.member.domain.Member;
import com.jshi.laughtale.wordbook.domain.WordBook;
import com.jshi.laughtale.worddata.domain.WordData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface WordBookRepository extends JpaRepository<WordBook, Long> {

    @Query("SELECT w FROM WordBook as w JOIN WordData as d ON d.level = :level WHERE w.member.id = :memberId")
    Page<WordBook> findAllByMemberIdWithLevel(int level, long memberId, Pageable pageable);

    Optional<WordBook> findByMemberAndWordData(Member member, WordData wordData);
}