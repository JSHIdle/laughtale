package com.jshi.laughtale.worddata.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.repository.WordDataRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WordDataService {
private final WordDataRepository wordDataRepository;
	public String findDefinitionByWord(String word){
		return wordDataRepository.findByWord(word).orElseThrow().getDefinition();
	}
}
