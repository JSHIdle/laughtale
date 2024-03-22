package com.jshi.laughtale.worddata.mapper;

import com.jshi.laughtale.speech.dto.SpeechBasic;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.dto.WordDataDetail;

import java.util.ArrayList;
import java.util.List;

public class WordDataMapper {

    private static final int INIT_LEVEL = 5;
    private static final int INIT_FREQUENCY = 0;

    public static WordData toEntity(String word, String partOfSpeech, String definition) {
        return WordData.builder()
                .word(word)
                .partOfSpeech(partOfSpeech)
                .definition(definition)
                .frequency(INIT_FREQUENCY)
                .level(INIT_LEVEL)
                .build();
    }

    public static WordDataDetail.Response toDetailResponse(WordData wordData, List<SpeechBasic.Response> speechList) {
        return WordDataDetail.Response.builder()
                .word(wordData.getWord())
                .partOfSpeech(wordData.getPartOfSpeech())
                .definition(wordData.getDefinition())
                .speeches(speechList)
                .build();
    }
}
