package com.jshi.laughtale.manga.repository;

import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.dto.LevelManga;
import com.jshi.laughtale.manga.dto.RecentManga;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MangaRepository extends JpaRepository<Manga, Long> {

    @Query(value = "SELECT C.chapterNo " +
            "FROM Manga AS M " +
            "JOIN Chapter AS C ON C.manga.id = M.id " +
            "WHERE M.title = :title " +
            "ORDER BY C.chapterNo DESC " +
            "LIMIT 1")
    Optional<Integer> findLastChapterByManga(String title);
    Optional<Manga> findByTitle(String title);



@Query(value = "select m.title , m.thumbnail "
	+ " from view_history v, manga m "
	+ " where m.id = v.manga_id "
	+ " and v.member_id = :memberId "
	+ " group by m.id "
	+ " order by MAX(v.view_date) ", nativeQuery = true)
	List<RecentManga.Response> findRecentManga(Long memberId);

Page<LevelManga.Response> findByLevel(int level, Pageable pageable);


}
