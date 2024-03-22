package com.jshi.laughtale.wordbook.service;

import com.jshi.laughtale.wordbook.domain.WordBook;
import com.jshi.laughtale.wordbook.dto.WordBookBasic;
import com.jshi.laughtale.wordbook.mapper.WordBookMapper;
import com.jshi.laughtale.wordbook.repository.WordBookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WordBookService {

    private final WordBookRepository wordBookRepository;

    public List<WordBookBasic.Response> loadWordBook(int level, long memberId) {
        List<WordBook> wordBookList = wordBookRepository.findAllByMemberIdWithLevel(level, memberId);
        return WordBookMapper.listToBasicResponse(wordBookList);
    }
}
