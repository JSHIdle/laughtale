package com.jshi.laughtale.parser;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.mapper.ChapterMapper;
import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.cut.mapper.CutMapper;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.mapper.MangaMapper;
import com.jshi.laughtale.position.mapper.PositionMapper;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.speech.mapper.SpeechMapper;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.mapper.WordDataMapper;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

public class MangaParser2 {
    private static final String PREFIX = "https://j10a705.p.ssafy.io/";

    public static Manga parseManga(Map attr) {
        List<Object> list = new ArrayList<>(attr.keySet());
        if (list.size() > 1) {
            new IllegalArgumentException();
        }
        String title = (String) list.get(0);
        attr = (Map<String, Object>) attr.get(title);
        String description = (String) attr.get(Attribute.DESCRIPTION);
        String author = (String) attr.get(Attribute.AUTHOR);
        String genres = (String) attr.get(Attribute.GENRES);
        String thumbnail = attachPrefix((String) attr.get(Attribute.THUMBNAIL));
        return MangaMapper.toEntity(title, author, description, genres, thumbnail);
    }

    public static Chapter parseChapter(int chapterNo, int pageCnt) {
        return ChapterMapper.toEntity(chapterNo, pageCnt);
    }

    public static Cut parseCut(Map<String, Object> attr) {
        int page = (Integer) attr.get(Attribute.PAGE);
        String imageUrl = attachPrefix((String) attr.get(Attribute.SRC));
        List<Integer> size = Optional.ofNullable((List<Integer>) attr.get(Attribute.SIZE)).orElse(List.of(-1, -1));
        return CutMapper.toEntity(page, imageUrl, size);
    }

    public static Speech parseSpeech(Map<String, Object> attr) {
        int idx = Integer.parseInt((String) attr.get(Attribute.IDX));
        List<Integer> pos = ((List<String>) attr.get(Attribute.POS)).stream().map(Integer::parseInt).toList();
        String sentence = (String) attr.get(Attribute.SENTENCE);
        return SpeechMapper.toEntity(sentence, idx, PositionMapper.listToPosition(pos));
    }

    public static WordData parseWordData(Map<String, Object> attr) {
        String word = (String) attr.get(Attribute.VALUE);
        String partOfSpeech = (String) attr.get(Attribute.PO_SPEECH);
        return WordDataMapper.toEntity(word, partOfSpeech);
    }

    private static String attachPrefix(String src) {
        return PREFIX + src;
    }
}
