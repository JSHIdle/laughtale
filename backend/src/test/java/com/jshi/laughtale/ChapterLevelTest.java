package com.jshi.laughtale;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.repository.ChapterRepository;
import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.cut.repository.CutRepository;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.speech.repository.SpeechRepository;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.repository.WordDataRepository;
import com.jshi.laughtale.wordlist.domain.WordList;
import com.jshi.laughtale.wordlist.repository.WordListRepository;

import lombok.RequiredArgsConstructor;

@SpringBootTest

public class ChapterLevelTest {
	@Autowired
	private ChapterRepository chapterRepository;
	@Autowired
	private CutRepository cutRepository;
	@Autowired
	private SpeechRepository speechRepository;
	@Autowired
	private WordListRepository wordListRepository;
	@Autowired
	private WordDataRepository wordDataRepository;

	@Test
	public void chapterLevelTest() {
		List<Chapter> chapterList = chapterRepository.findAll();
		List<Cut> cutList = cutRepository.findAll();
		List<Speech> speechList = speechRepository.findAll();
		List<WordList> wordListList = wordListRepository.findAll();
		List<WordData> wordDataList = wordDataRepository.findAll();




	}
}
