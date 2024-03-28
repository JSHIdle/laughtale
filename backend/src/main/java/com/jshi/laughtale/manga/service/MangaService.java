package com.jshi.laughtale.manga.service;

import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.dto.LevelManga;
import com.jshi.laughtale.manga.dto.MangaAnalyze;
import com.jshi.laughtale.manga.dto.MangaUpload;
import com.jshi.laughtale.manga.dto.RecentManga;
import com.jshi.laughtale.manga.mapper.MangaMapper;
import com.jshi.laughtale.manga.repository.MangaRepository;
import com.jshi.laughtale.utils.DataRequest;
import com.jshi.laughtale.utils.FileUtils;

import jakarta.persistence.Tuple;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MangaService {

	private final MangaRepository mangaRepository;
	private final MangaParser mangaParser;

	public MangaAnalyze.Response upload(MultipartFile thumbnail, MangaUpload.Request manga, List<MultipartFile> files) throws
		IOException {
		String thumbnailPath = FileUtils.save(thumbnail, manga.getTitle(), "thumbnail");
		log.info("썸네일 저장 완료");
		int last = mangaRepository.findLastChapterByManga(manga.getTitle()).orElse(0) + 1;
		log.info("챕터 번호 불러오기 성공");

		List<String> names = new ArrayList<>();
		for (MultipartFile file : files) {
			String filename = FileUtils.save(file, manga.getTitle(), String.valueOf(last));
			names.add(filename);
		}
		log.info("컷 이미지 저장 성공");


		MangaAnalyze.Request analyzeRequest = MangaMapper.toAnalyze(thumbnailPath, manga, last, names);
		Map result = DataRequest.analyze(analyzeRequest);
		log.info("분석 완료");

		Manga m = mangaRepository.findByTitle(manga.getTitle())
			.orElse(MangaMapper.analyzeToEntity(analyzeRequest));

		mangaRepository.save(m);
		MangaAnalyze.Response response = mangaParser.parser(m, result, last);
		m.update();
		log.info("파싱 완료");
		return response;
	}

	public List<RecentManga.Response> getRecentManga(Long memberId) {
		List<Tuple> tupleList = mangaRepository.findRecentManga(memberId);
		List<RecentManga.Response> response = new ArrayList<>();
		for (Tuple tuple : tupleList) {
			response.add(RecentManga.Response.builder()
				.id(tuple.get("id", Long.class))
				.thumbnail(tuple.get("thumbnail", String.class))
				.title(tuple.get("title", String.class))
				.build());
		}
		return response;
	}

	public Page<LevelManga.Response> getLevelManga(int level, int page, int size) {
		Pageable pageable = PageRequest.of(page, 12);
		return mangaRepository.findByLevel(level, pageable);
	}

	public Manga getMangaInfo(Long id) {
		return mangaRepository.findById(id).orElseThrow();
	}

	public Manga findById(Long mangaId) {
		return mangaRepository.findById(mangaId).orElseThrow();
	}
}
