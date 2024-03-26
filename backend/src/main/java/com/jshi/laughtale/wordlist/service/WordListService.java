package com.jshi.laughtale.wordlist.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.jshi.laughtale.quiz.dto.QuizWord;
import com.jshi.laughtale.quiz.dto.TempDTO;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.wordlist.domain.WordList;
import com.jshi.laughtale.wordlist.repository.WordListRepository;

import jakarta.persistence.Tuple;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WordListService {
	private final WordListRepository wordListRepository;

	public List<QuizWord> findWordListsWithLevel(int level, int chapterId) {
		List<Tuple> tempList = wordListRepository.findWordListsWithLevel(level, chapterId);
		List<QuizWord> quizList = new ArrayList<>();
		for (Tuple tuple : tempList) {
			quizList.add(QuizWord.builder()
				.wordDataId(tuple.get("word_data_id", Long.class))
				.answerWord(tuple.get("answer_word", String.class))
				.level(tuple.get("level", Integer.class))
				.wordListId(tuple.get("word_list_id", Long.class))
				.speechId(tuple.get("speech_id", Long.class))
				.build());
		}
		return quizList;
	}

	public WordList findByWordDataIdAndSpeechId(Long wordId, Long speechId) {
		return wordListRepository.findByWordDataIdAndSpeechId(wordId, speechId);
	}

	public List<WordList> loadWordData(WordData wordData) {
		return wordListRepository.findAllByWordData(wordData);
	}
}
