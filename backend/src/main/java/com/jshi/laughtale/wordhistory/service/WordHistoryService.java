package com.jshi.laughtale.wordhistory.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jshi.laughtale.wordhistory.domain.WordHistory;
import com.jshi.laughtale.wordhistory.repository.WordHistoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WordHistoryService {
	private final WordHistoryRepository wordHistoryRepository;

	public List<WordHistory> getMemberWordHistory(Long memberId) {
		return wordHistoryRepository.findByMemberId(memberId);
	}

	public List<WordHistory> findByWordIdIn(List<Long> list) {
		return wordHistoryRepository.findByWordIdIn(list);
	}
}
