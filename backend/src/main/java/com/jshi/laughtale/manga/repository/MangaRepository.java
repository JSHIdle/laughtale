package com.jshi.laughtale.manga.repository;

import com.jshi.laughtale.manga.domain.Manga;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

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
}
