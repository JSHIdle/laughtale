package com.jshi.laughtale.parser.service;

import com.jshi.laughtale.parser.Attribute;
import com.jshi.laughtale.parser.MangaParser2;
import com.jshi.laughtale.parser.context.ChapterContext;
import com.jshi.laughtale.parser.context.CutContext;
import com.jshi.laughtale.parser.context.MangaContext;
import com.jshi.laughtale.parser.context.SpeechContext;
import com.jshi.laughtale.worddata.domain.WordData;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public class ParseService {

    public MangaContext parse(Map attr) {
        MangaContext mangaContext = MangaContext.builder()
                .manga(MangaParser2.parseManga(attr))
                .build();
        List<List<Object>> chapters = (List<List<Object>>) attr.get(Attribute.CHAPTER);
        List<ChapterContext> chapterContexts = new ArrayList<>();

        for (int i = 0; i < chapters.size(); i++) {
            ChapterContext chapterContext = chapterParsing(i, chapters.get(i));
            chapterContexts.add(chapterContext);
        }
        mangaContext.setChapterContexts(chapterContexts);
        return mangaContext;
    }

    private ChapterContext chapterParsing(int idx, List<Object> chapter) {
        ChapterContext chapterContext = ChapterContext.builder()
                .chapter(MangaParser2.parseChapter(idx, chapter.size()))
                .build();
        List<CutContext> cutContexts = new ArrayList<>();
        for (int i = 0; i < chapter.size(); i++) {
            Map<String, Object> cut = (Map<String, Object>) chapter.get(i);
            CutContext cutContext = cutParsing(cut);
            cutContexts.add(cutContext);
        }
        chapterContext.getChapter().setLevel(cutContexts.size());
        chapterContext.setCutContexts(cutContexts);
        return chapterContext;
    }

    private CutContext cutParsing(Map<String, Object> cut) {
        CutContext cutContext = CutContext.builder()
                .cut(MangaParser2.parseCut(cut))
                .build();
        List<SpeechContext> speechContexts = new ArrayList<>();
        List<Map<String, Object>> speeches = (List<Map<String, Object>>) cut.get(Attribute.SPEECH);
        for (int i = 0; i < speeches.size(); i++) {
            Map<String, Object> speech = speeches.get(i);
            SpeechContext speechContext = speechParsing(speech);
            speechContexts.add(speechContext);
        }
        cutContext.setSpeechContexts(speechContexts);
        return cutContext;
    }

    private SpeechContext speechParsing(Map<String, Object> speech) {
        SpeechContext speechContext = SpeechContext.builder()
                .speech(MangaParser2.parseSpeech(speech))
                .build();
        Map<String, Object> words = (Map<String, Object>) speech.get(Attribute.WORD_LIST);
        List<WordData> wordDataList = new ArrayList<>();
        for (int i = 0; i < words.size(); i++) {
            WordData wordData = wordDataParsing((Map<String, Object>) words.get(i));
            wordDataList.add(wordData);
        }
        speechContext.setWordDataList(wordDataList);
        return speechContext;
    }

    private WordData wordDataParsing(Map<String, Object> word) {
        return MangaParser2.parseWordData(word);
    }
}
