package com.jshi.laughtale.worddata.mapper;

import com.jshi.laughtale.worddata.domain.WordData;

import java.util.ArrayList;

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
}
