package com.jshi.laughtale.utils;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.mapper.ChapterMapper;
import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.cut.mapper.CutMapper;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.position.domain.Position;
import com.jshi.laughtale.position.mapper.PositionMapper;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.speech.mapper.SpeechMapper;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.mapper.WordDataMapper;
import com.jshi.laughtale.worddata.repository.WordDataRepository;
import com.jshi.laughtale.wordlist.domain.WordList;
import com.jshi.laughtale.wordlist.mapper.WordListMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Component
@RequiredArgsConstructor
public class MangaParser {

    private final WordDataRepository wordDataRepository;

    public void parser(Manga manga, Map attributes, int last) {
        Map attr = (Map) attributes.get(manga.getTitle());

        List<Chapter> chapterList = manga.getChapter();
        String thumbnail = (String) attr.get("thumbnail");
        List<List<Object>> chapter = (List<List<Object>>) attr.get("chapter");
        manga.updateThumbnail(thumbnail);

        for (int i = 0; i < chapter.size(); i++) {
            int pageCnt = chapter.get(i).size();
            Chapter chapterEntity = ChapterMapper.toEntity(manga, last + i, pageCnt);
            chapterList.add(chapterEntity);
            parseChapter(chapterEntity, chapter.get(i));
        }
    }

    private void parseChapter(Chapter chapterEntity, List<Object> cut) {
        List<Cut> cutList = chapterEntity.getCuts();
        for (int i = 0; i < cut.size(); i++) {
            Map info = (Map) cut.get(i);
            String imageUrl = (String) info.get("src");
            int idx = (Integer) info.get("page");
            List<Integer> size = Optional.ofNullable((List<Integer>) info.get("size")).orElse(List.of(-1, -1));
            Cut cutEntity = CutMapper.toEntity(chapterEntity, idx, imageUrl, size);
            cutList.add(cutEntity);
            parseCut(cutEntity, (List<Object>) info.get("speech"));
        }
    }

    private void parseCut(Cut cutEntity, List<Object> speech) {
        List<Speech> speeches = cutEntity.getSpeeches();

        for (Object o : speech) {
            Map s = (Map) o;
            int speechNo = Integer.parseInt((String) s.get("idx"));
            List<Integer> pos = ((List<String>) s.get("pos")).stream().map(Integer::parseInt).toList();
            Position positionEntity = PositionMapper.listToPosition(pos);
            String sentence = (String) s.get("sentence");
            List<Map> wordList = (List<Map>) s.get("word_list");
            Speech speechEntity = SpeechMapper.toEntity(cutEntity, sentence, speechNo, positionEntity);
            speeches.add(speechEntity);
            parseWords(speechEntity, wordList);
        }
    }

    private void parseWords(Speech speech, List<Map> wordList) {
        List<WordList> wordLists = speech.getWordLists();
        for (Map map : wordList) {
            String partOfSpeech = (String) map.get("po_speech");
            String word = (String) map.get("value");

            WordData wordData = wordDataRepository.findByWord(word).orElse(
                    WordDataMapper.toEntity(word, partOfSpeech, "")
            );
            wordData.updateFrequency();
            WordList wordListEntity = WordListMapper.toEntity(speech, wordData);
            wordLists.add(wordListEntity);
            wordDataRepository.save(wordData);
        }
    }

}
