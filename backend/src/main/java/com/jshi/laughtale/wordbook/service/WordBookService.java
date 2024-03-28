package com.jshi.laughtale.wordbook.service;

import com.jshi.laughtale.member.domain.Member;
import com.jshi.laughtale.member.service.MemberService;
import com.jshi.laughtale.wordbook.domain.WordBook;
import com.jshi.laughtale.wordbook.dto.WordBookBasic;
import com.jshi.laughtale.wordbook.mapper.WordBookMapper;
import com.jshi.laughtale.wordbook.repository.WordBookRepository;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.repository.WordDataRepository;
import com.jshi.laughtale.worddata.service.WordDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WordBookService {

    private final WordBookRepository wordBookRepository;
    private final WordDataService wordDataService;
    private final MemberService memberService;

    public void addWord(Long wordId, Long memberId) {
        WordData wordData = wordDataService.loadWoadDataById(wordId);
        Member member = memberService.findById(memberId);
        wordBookRepository.save(WordBookMapper.toEntity(wordData, member));
    }

    public Page<WordBookBasic.Response> loadWordBook(int level, long memberId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<WordBook> wordBookList = wordBookRepository.findAllByMemberIdWithLevel(level, memberId, pageable);
        return wordBookList.map(WordBookMapper::toBasicResponse);
    }

    public void deleteWordBook(Long id) {
        wordBookRepository.deleteById(id);
    }
}
