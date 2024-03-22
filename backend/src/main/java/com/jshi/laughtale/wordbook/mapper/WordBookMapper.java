package com.jshi.laughtale.wordbook.mapper;

import com.jshi.laughtale.wordbook.domain.WordBook;
import com.jshi.laughtale.wordbook.dto.WordBookBasic;
import com.jshi.laughtale.worddata.domain.WordData;

import java.util.List;

public class WordBookMapper {

    public static List<WordBookBasic.Response> listToBasicResponse(List<WordBook> wordBookList) {
        return wordBookList.stream().map(WordBookMapper::toBasicResponse).toList();
    }

    public static WordBookBasic.Response toBasicResponse(WordBook wordBook) {
        WordData wordData = wordBook.getWordData();
        return WordBookBasic.Response.builder()
                .id(wordData.getId())
                .word(wordData.getWord())
                .definition(wordData.getDefinition())
                .partOfSpeech(wordData.getPartOfSpeech())
                .build();
    }
}
