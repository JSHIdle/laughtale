package com.jshi.laughtale.worddata.service;

import com.jshi.laughtale.speech.dto.SpeechBasic;
import com.jshi.laughtale.speech.service.SpeechService;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.dto.WordDataDetail;
import com.jshi.laughtale.worddata.exception.NotExistWordDataException;
import com.jshi.laughtale.worddata.mapper.WordDataMapper;
import com.jshi.laughtale.worddata.repository.WordDataRepository;
import com.jshi.laughtale.wordlist.domain.WordList;
import com.jshi.laughtale.wordlist.service.WordListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WordDataService {

    private final WordListService wordListService;
    private final SpeechService speechService;
    private final WordDataRepository wordDataRepository;

    public String findDefinitionByWord(String word) {
        return wordDataRepository.findByWord(word).orElseThrow().getDefinition();
    }

    public WordData loadWoadDataById(Long id) {
        return wordDataRepository.findById(id).orElseThrow(NotExistWordDataException::new);
    }

    public WordDataDetail.Response loadWordDataDetail(Long id) {
        WordData wordData = wordDataRepository.findById(id).orElseThrow(NotExistWordDataException::new);
        List<WordList> wordList = wordListService.loadWordListByWordData(wordData);
        List<SpeechBasic.Response> speechBasicList = wordList.stream().map(speechService::loadByWordList).toList();
        return WordDataMapper.toDetailResponse(wordData, speechBasicList);
    }

    public WordDataDetail.Response loadWordDataDetailWithoutSpeech(Long id) {
        WordData wordData = wordDataRepository.findById(id).orElseThrow(NotExistWordDataException::new);
        return WordDataMapper.toDetailResponse(wordData);
    }
}
