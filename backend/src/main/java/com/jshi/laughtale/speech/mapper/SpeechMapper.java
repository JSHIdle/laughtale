package com.jshi.laughtale.speech.mapper;

import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.position.domain.Position;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.wordlist.domain.WordList;

import java.util.ArrayList;

public class SpeechMapper {

    public static Speech toEntity(Cut cut, String sentence, int speechNo, Position position) {
        return Speech.builder()
                .cut(cut)
                .sentence(sentence)
                .speechNo(speechNo)
                .position(position)
                .wordLists(new ArrayList<>())
                .build();
    }
}
