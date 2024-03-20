package com.jshi.laughtale.wordlist.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jshi.laughtale.wordlist.dto.QuizWord;
import com.jshi.laughtale.wordlist.repository.WordListRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WordListService {
	private final WordListRepository wordListRepository;

	public List<QuizWord> findWordListsWithLevel(int level) {
		return wordListRepository.findWordListsWithLevel(level).stream().toList();
	}
}
