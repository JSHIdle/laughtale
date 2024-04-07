package com.jshi.laughtale.worddata.service;

import com.jshi.laughtale.speech.dto.SpeechBasic;
import com.jshi.laughtale.speech.service.SpeechService;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.dto.WordCloudData;
import com.jshi.laughtale.worddata.dto.WordDataDetail;
import com.jshi.laughtale.worddata.exception.NotExistWordDataException;
import com.jshi.laughtale.worddata.mapper.WordDataMapper;
import com.jshi.laughtale.worddata.repository.WordDataRepository;
import com.jshi.laughtale.wordlist.domain.WordList;
import com.jshi.laughtale.wordlist.service.WordListService;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class WordDataService {

    private final WordListService wordListService;
    private final SpeechService speechService;
    private final WordDataRepository wordDataRepository;

    @Transactional(readOnly = true)
    public String findDefinitionByWord(String word) {
        return wordDataRepository.findByWord(word).orElseThrow().getDefinition();
    }

    @Transactional(readOnly = true)
    public WordData loadWoadDataById(Long id) {
        return wordDataRepository.findById(id).orElseThrow(NotExistWordDataException::new);
    }

    @Transactional(readOnly = true)
    public WordDataDetail.Response loadWordDataDetail(Long id) {
        WordData wordData = wordDataRepository.findById(id).orElseThrow(NotExistWordDataException::new);
        List<WordList> wordList = wordListService.loadWordListByWordData(wordData);
        Collections.shuffle(wordList);
        List<WordList> topTenList = new ArrayList<>();
//		620846~621675
        for (int i = 0; i < wordList.size(); i++) {
            Long wordListId = wordList.get(i).getId();
            if (wordListId >= 620846 && wordListId <= 621675) {
                topTenList.add(wordList.get(i));
            }
            if (topTenList.size() >= 10) {
                break;
            }
        }
        int len = Math.min(wordList.size(), 10 - topTenList.size());
        for (int i = 0; i < len; i++) {
            if (topTenList.contains(wordList.get(i))) {
                continue;
            }
            topTenList.add(wordList.get(i));
        }
        List<SpeechBasic.Response> speechBasicList = topTenList.stream().map(speechService::loadByWordList).toList();
        return WordDataMapper.toDetailResponse(wordData, speechBasicList);
    }

    @Transactional(readOnly = true)
    public List<WordDataDetail.Response> loadWordDataDetailWithoutSpeech(Long speechId) {
        List<WordList> wordList = wordListService.loadWordListBySpeechId(speechId);
        List<WordData> wordDataList = wordList.stream().map(w -> wordDataRepository
                        .findById(w.getWordData().getId()).orElseThrow(NotExistWordDataException::new))
                .toList();
        log.info("speechId: {}, wordList : {}, wordData : {}", speechId, wordList, wordDataList);
        return wordDataList.stream().map(WordDataMapper::toDetailResponse).toList();
    }

    public List<WordCloudData.Response> loadWordCloudData(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return wordDataRepository.findAllByOrderByFrequencyDesc(pageable)
                .stream()
                .map(WordDataMapper::toWordCloudResponse)
                .toList();
    }

    public List<WordDataDetail.Response> loadRandomWord() {
        return wordDataRepository.findRandom().stream().map(WordDataMapper::toDetailResponse).toList();
    }

    public Integer loadLevelByWord(String word) {
        return wordDataRepository.findLevelByWord(word).orElse(null);
    }
}
