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
import com.jshi.laughtale.utils.MangaParser;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

	public void upload(MultipartFile thumbnail, MangaUpload.Request manga, List<MultipartFile> files) throws
		IOException {
		String thumbnailPath = FileUtils.save(thumbnail);

		List<String> names = new ArrayList<>();
		for (MultipartFile file : files) {
			String filename = FileUtils.save(file);
			names.add(filename);
		}

		int last = mangaRepository.findLastChapterByManga(manga.getTitle()).orElse(0) + 1;

		MangaAnalyze.Request analyzeRequest = MangaMapper.toAnalyze(thumbnailPath, manga, last, names);
		Map result = DataRequest.analyze(analyzeRequest);

        Manga m = mangaRepository.findByTitle(manga.getTitle())
                .orElse(MangaMapper.analyzeToEntity(analyzeRequest));

        mangaParser.parser(m, result, last);
        m.update();
        mangaRepository.save(m);
    }

	public List<RecentManga.Response> getRecentManga(Long memberId) {
		return mangaRepository.findRecentManga(memberId);
	}

	public List<LevelManga.Response> getLevelManga(int level, int start, int end) {
		return mangaRepository.findLevelManga(level, start, end).orElseThrow();
	}

	public Manga getMangaInfo(Long id) {
		return mangaRepository.findById(id).orElseThrow();
	}
}
