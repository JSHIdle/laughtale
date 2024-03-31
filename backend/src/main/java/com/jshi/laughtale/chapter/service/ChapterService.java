package com.jshi.laughtale.chapter.service;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.dto.ChapterLevelDto;
import com.jshi.laughtale.chapter.dto.ChapterListDto;
import com.jshi.laughtale.chapter.exception.ChapterNotFoundException;
import com.jshi.laughtale.chapter.mapper.ChapterMapper;
import com.jshi.laughtale.chapter.repository.ChapterRepository;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.repository.MangaRepository;
import com.jshi.laughtale.manga.service.MangaService;
import com.jshi.laughtale.wordlist.service.WordListService;

import jakarta.persistence.Tuple;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChapterService {

	private final ChapterRepository chapterRepository;
	private final MangaService mangaService;
	private final WordListService wordListService;
	private final MangaRepository mangaRepository;

	public Page<ChapterListDto.Response> getChaptersFromManga(Long mangaId, int pageNo, int size) {
		Manga manga = mangaService.findById(mangaId);
		Pageable pageable = PageRequest.of(pageNo, size);
		return chapterRepository.findAllByMangaOrderByChapterNoDesc(manga, pageable)
			.map(ChapterMapper::chapterToChapterListDto);
	}

	public Chapter loadByTitleAndChapterNo(String title, Integer chapterNo) {
		return chapterRepository.findChapterByMangaTitleAndChapterNo(title, chapterNo)
			.orElseThrow(ChapterNotFoundException::new);
	}

	public Chapter findById(Long chapterId) {
		Optional<Chapter> chapter = chapterRepository.findById(chapterId);
		if (chapter.isPresent()) {
			return chapter.get();
		} else {
			throw new RuntimeException("Chapter not found with id: " + chapterId);
		}
	}

	public List<ChapterLevelDto.Response> getChapterLevels(Long mangaId) {

		return chapterRepository.findAllByMangaId(mangaId).stream().map(ChapterMapper::chapterToChapterLevelDto)
			.toList();

	}


	public int calculateChapterLevel(long chapterId) {
		List<Tuple> tupleList = wordListService.findCalculatedChapterLevel(chapterId);
		long totalSum = 0;
		long totalCnt = 0;
		for (Tuple tuple : tupleList) {
			int level = tuple.get("level", Integer.class);
			long cnt = tuple.get("levelcnt", Long.class);
			totalSum += level * cnt;
			totalCnt += cnt;
		}
		double avg = (double)totalSum / totalCnt;
		return averageToLevel(avg);
	}

	public int averageToLevel(double avg) {
		if (avg <= 1.67)
			return 1;
		if (avg <= 1.73)
			return 2;
		if (avg <= 1.8)
			return 3;
		if (avg <= 1.9)
			return 4;
		return 5;

	}

	public List<Integer> getChapterPagination(Long chapterId){
		Optional<Chapter> currChapter = chapterRepository.findById(chapterId);
		Manga manga = currChapter.get().getManga();
		List<Chapter> chapterList = manga.getChapter();
		Collections.sort(chapterList, (a, b) -> Long.compare(a.getChapterNo(), b.getChapterNo()));

		int idx = getChapterIndex(chapterList, chapterId);

		return checkPage(idx, chapterList.size());

	}

	private Integer getChapterIndex(List<Chapter> chapterList, Long getID){
		if(chapterList.size() == 0) return null;

		int idx = 0;

		for(idx = 0 ; idx < chapterList.size(); idx++){
			if(getID.equals(chapterList.get(idx).getId())) break;
		}
		return idx;

	}
	private List<Integer> checkPage(int curr,  int size){
		int prev= curr - 1; int next = curr + 1;

		List<Integer> list = new ArrayList<>();

		list.add(prev == -1  ? null : prev);
		list.add(next == size ? null : next);

		return list;
	}
}
