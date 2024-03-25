package com.jshi.laughtale.chapter.repository;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.manga.domain.Manga;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ChapterRepository extends JpaRepository<Chapter, Long> {
	Page<Chapter> findAllByMangaOrderByChapterNoAsc(Manga manga, Pageable pageable);
	@Query("SELECT Chapter FROM Chapter as c WHERE c.manga.title = :title AND c.chapterNo = :chapterNo")
	Optional<Chapter> findChapterByMangaTitleAndChapterNo(String title, Integer chapterNo);
}
