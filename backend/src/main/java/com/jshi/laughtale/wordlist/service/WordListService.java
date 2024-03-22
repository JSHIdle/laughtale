package com.jshi.laughtale.wordlist.service;

import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.wordlist.domain.WordList;
import com.jshi.laughtale.quiz.dto.QuizWord;
import com.jshi.laughtale.wordlist.repository.WordListRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WordListService {
	private final WordListRepository wordListRepository;

	public List<QuizWord> findWordListsWithLevel(int level) {
		return wordListRepository.findWordListsWithLevel(level).stream().toList();
	}

	public WordList findByWordDataIdAndSpeechId(Long wordId, Long speechId){
		return wordListRepository.findByWordDataIdAndSpeechId(wordId,speechId);
	}

	public List<WordList> loadWordData(WordData wordData) {
		return wordListRepository.findAllByWordData(wordData);
	}
}
