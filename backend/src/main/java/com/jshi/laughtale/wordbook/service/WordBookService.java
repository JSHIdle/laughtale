package com.jshi.laughtale.wordbook.service;

import com.jshi.laughtale.wordbook.domain.WordBook;
import com.jshi.laughtale.wordbook.dto.WordBookBasic;
import com.jshi.laughtale.wordbook.mapper.WordBookMapper;
import com.jshi.laughtale.wordbook.repository.WordBookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WordBookService {

    private final WordBookRepository wordBookRepository;

    public Page<WordBookBasic.Response> loadWordBook(int level, long memberId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<WordBook> wordBookList = wordBookRepository.findAllByMemberIdWithLevel(level, memberId, pageable);
        return wordBookList.map(WordBookMapper::toBasicResponse);
    }

    public void deleteWordBook(Long id) {
        wordBookRepository.deleteById(id);
    }
}
