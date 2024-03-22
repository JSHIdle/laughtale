package com.jshi.laughtale.manga.repository;

import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.dto.LevelManga;
import com.jshi.laughtale.manga.dto.RecentManga;

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


@Query(value = "SELECT title, thumbnail, level, author "
	+ "FROM (\n"
	+ "    SELECT m.title, m.thumbnail, m.level, m.author,"
	+ "           (@row_number := CASE "
	+ "                            WHEN @current_level = m.level THEN @row_number + 1 "
	+ "                            ELSE 1 "
	+ "                          END) AS row_num, "
	+ "           (@current_level := m.level) AS current_level "
	+ "    FROM manga m "
	+ "    CROSS JOIN (SELECT @row_number := 0, @current_level := NULL) AS vars "
	+ "    ORDER BY m.level DESC "
	+ ") AS ranked_manga "
	+ "WHERE row_num <= :end and row_num >= :start and level = :level "
	+ "ORDER BY level DESC", nativeQuery = true)
	Optional<List<LevelManga.Response>> findLevelManga(int level, int start, int end);
}
