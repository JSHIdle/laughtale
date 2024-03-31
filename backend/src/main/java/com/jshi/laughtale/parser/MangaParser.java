package com.jshi.laughtale.parser;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.dto.ChapterAnalyze;
import com.jshi.laughtale.chapter.mapper.ChapterMapper;
import com.jshi.laughtale.chapter.repository.ChapterRepository;
import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.cut.dto.CutAnalyze;
import com.jshi.laughtale.cut.mapper.CutMapper;
import com.jshi.laughtale.cut.repository.CutRepository;
import com.jshi.laughtale.jako.service.JaKoService;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.dto.MangaAnalyze;
import com.jshi.laughtale.manga.mapper.MangaMapper;
import com.jshi.laughtale.position.domain.Position;
import com.jshi.laughtale.position.mapper.PositionMapper;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.speech.dto.SpeechDetail;
import com.jshi.laughtale.speech.mapper.SpeechMapper;
import com.jshi.laughtale.speech.repository.SpeechRepository;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.dto.WordDataDetail;
import com.jshi.laughtale.worddata.mapper.WordDataMapper;
import com.jshi.laughtale.worddata.repository.WordDataRepository;
import com.jshi.laughtale.wordlist.domain.WordList;
import com.jshi.laughtale.wordlist.mapper.WordListMapper;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class MangaParser {

    private final String PREFIX = "https://j10a705.p.ssafy.io/";
    private final ChapterRepository chapterRepository;
    private final CutRepository cutRepository;
    private final SpeechRepository speechRepository;
    private final WordDataRepository wordDataRepository;
    private final JaKoService jaKoService;

    public MangaAnalyze.Response parser(Manga manga, Map attributes, int last) {
        Map attr = (Map) attributes.get(manga.getTitle());

        List<Chapter> chapterList = manga.getChapter();
        String thumbnail = (String) attr.get("thumbnail");
        List<List<Object>> chapter = (List<List<Object>>) attr.get("chapter");
        manga.updateThumbnail(attachPrefix(thumbnail));

        MangaAnalyze.Response analyzeResponse = MangaMapper.toAnalyzeResponse(manga);

        for (int i = 0; i < chapter.size(); i++) {
            int pageCnt = chapter.get(i).size();
            Chapter chapterEntity = ChapterMapper.toEntity(manga, last + i, pageCnt);
            chapterEntity = chapterRepository.save(chapterEntity);
            chapterList.add(chapterEntity);
            analyzeResponse.getChapter().add(parseChapter(chapterEntity, chapter.get(i)));
        }

        return analyzeResponse;
    }

    private ChapterAnalyze.Response parseChapter(Chapter chapterEntity, List<Object> cut) {
        List<Cut> cutList = chapterEntity.getCuts();
        List<CutAnalyze.Response> cuts = new ArrayList<>();
        ChapterAnalyze.Response analyzeResponse = ChapterMapper.toAnalyzeResponse(chapterEntity);
        for (int i = 0; i < cut.size(); i++) {
            Map info = (Map) cut.get(i);
            String imageUrl = attachPrefix((String) info.get("src"));
            int idx = (Integer) info.get("page");
            List<Integer> size = Optional.ofNullable((List<Integer>) info.get("size")).orElse(List.of(-1, -1));
            Cut cutEntity = CutMapper.toEntity(chapterEntity, idx, imageUrl, size);
            cutRepository.save(cutEntity);
            cutList.add(cutEntity);
            cuts.add(parseCut(cutEntity, (List<Object>) info.get("speech")));
        }
        analyzeResponse.setCuts(cuts);
        return analyzeResponse;
    }

    private CutAnalyze.Response parseCut(Cut cutEntity, List<Object> speech) {
        List<Speech> speeches = cutEntity.getSpeeches();
        List<SpeechDetail.Response> sentences = new ArrayList<>();
        List<WordDataDetail.Response> words = new ArrayList<>();
        CutAnalyze.Response analyzeResponse = CutMapper.toAnalyzeResponse(cutEntity);

        for (Object o : speech) {
            Map s = (Map) o;
            int speechNo = Integer.parseInt((String) s.get("idx"));
            List<Integer> pos = ((List<String>) s.get("pos")).stream().map(Integer::parseInt).toList();
            Position positionEntity = PositionMapper.listToPosition(pos);
            String sentence = (String) s.get("sentence");
            List<Map> wordList = (List<Map>) s.get("word_list");

            Speech speechEntity = SpeechMapper.toEntity(cutEntity, sentence, speechNo, positionEntity);
            speechRepository.save(speechEntity);
            speeches.add(speechEntity);
            sentences.add(SpeechMapper.toAnalyzeResponse(speechEntity));
            words.addAll(parseWords(speechEntity, wordList));
        }
//        analyzeResponse.setWords(words);
        analyzeResponse.setSentence(sentences);
        return analyzeResponse;
    }

    private List<WordDataDetail.Response> parseWords(Speech speech, List<Map> wordList) {
        List<WordDataDetail.Response> words = new ArrayList<>();
        List<WordList> wordLists = speech.getWordLists();
        for (Map map : wordList) {
            String partOfSpeech = (String) map.get("po_speech");
            String word = (String) map.get("value");

            WordData wordData = wordDataRepository.findByWord(word).orElse(
                    WordDataMapper.toEntity(word, partOfSpeech, jaKoService.loadWordMeaning(word))
            );
            wordData.updateFrequency();
            WordList wordListEntity = WordListMapper.toEntity(speech, wordData);
            wordLists.add(wordListEntity);
            wordDataRepository.save(wordData);
            words.add(WordDataMapper.toDetailResponse(wordData, null));
        }
        return words;
    }

    private String attachPrefix(String src) {
        return PREFIX + src;
    }
}
