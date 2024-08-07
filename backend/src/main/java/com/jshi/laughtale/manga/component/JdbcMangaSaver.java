package com.jshi.laughtale.manga.component;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.repository.MangaRepository;
import com.jshi.laughtale.parser.context.ChapterContext;
import com.jshi.laughtale.parser.context.CutContext;
import com.jshi.laughtale.parser.context.MangaContext;
import com.jshi.laughtale.parser.context.SpeechContext;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.worddata.domain.WordData;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class JdbcMangaSaver {
    private final String INSERT_MANGA = "INSERT INTO manga (chapter_cnt, level, description, author, category, thumbnail, title) VALUES (?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE chapter_cnt = chapter_cnt + 1";
    private final String INSERT_CHAPTER = "INSERT INTO chapter (chapter_no, page_cnt, manga_id, level) VALUES (?, ?, ?, ?)";
    private final String INSERT_CUT = "INSERT INTO cut (cut_no, height, width, chapter_id, image_url) VALUES (?, ?, ?, ?, ?)";
    private final String INSERT_SPEECH = "INSERT INTO speech (speech_no, cut_id, position_id, sentence) VALUES (?, ?, ?, ?)";
    private final String INSERT_WORD_DATA = "INSERT INTO word_data (frequency, level, definition, part_of_speech, word) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE frequency = frequency + 1";
    private final String INSERT_WORD_LIST = "INSERT INTO word_list (speech_id, word_id) VALUES (?, ?)";
    private final JdbcTemplate jdbcTemplate;
    private final MangaRepository mangaRepository;

    public void save(MangaContext mangaContext) {
        Manga manga = mangaContext.getManga();
        jdbcTemplate.update(INSERT_MANGA, manga.getChapterCnt(), manga.getLevel(), manga.getDescription(), manga.getAuthor(), manga.getCategory(), manga.getThumbnail(), manga.getTitle());
        saveChapter(mangaContext.getChapterContexts());
    }

    private void saveChapter(List<ChapterContext> chapterContexts) {
        List<Object[]> batchArgs = new ArrayList<>();
        for (ChapterContext chapterContext : chapterContexts) {
            Chapter chapter = chapterContext.getChapter();
            batchArgs.add(new Object[]{chapter.getChapterNo(), chapter.getPageCnt(), chapter.getManga().getId(), chapter.getLevel()});
        }
        jdbcTemplate.batchUpdate(INSERT_CHAPTER, batchArgs);
        saveCut(chapterContexts.stream().flatMap(chapterContext -> chapterContext.getCutContexts().stream()).collect(Collectors.toList()));
    }

    private void saveCut(List<CutContext> cutContexts) {
        List<Object[]> batchArgs = new ArrayList<>();
        for (CutContext cutContext : cutContexts) {
            Cut cut = cutContext.getCut();
            batchArgs.add(new Object[]{cut.getCutNo(), cut.getHeight(), cut.getWidth(), cut.getChapter().getId(), cut.getImageUrl()});
        }
        jdbcTemplate.batchUpdate(INSERT_CUT, batchArgs);
        saveSpeech(cutContexts.stream().flatMap(cutContext -> cutContext.getSpeechContexts().stream()).collect(Collectors.toList()));
    }

    private void saveSpeech(List<SpeechContext> speechContexts) {
        List<Object[]> batchArgs = new ArrayList<>();
        for (SpeechContext speechContext : speechContexts) {
            Speech speech = speechContext.getSpeech();
            saveWordData(speechContext.getWordDataList(), speech);
            batchArgs.add(new Object[]{speech.getSpeechNo(), speech.getCut().getId(), speech.getPosition().getId(), speech.getSentence()});
        }
        jdbcTemplate.batchUpdate(INSERT_SPEECH, batchArgs);
    }

    private void saveWordData(List<WordData> wordDataList, Speech speech) {
        List<Object[]> batchArgsWordData = new ArrayList<>();
        List<Object[]> batchArgsWordList = new ArrayList<>();
        for (WordData wordData : wordDataList) {
            batchArgsWordData.add(new Object[]{wordData.getFrequency(), wordData.getLevel(), wordData.getDefinition(), wordData.getPartOfSpeech(), wordData.getWord()});
            batchArgsWordList.add(new Object[]{speech.getId(), wordData.getId()});
        }
        jdbcTemplate.batchUpdate(INSERT_WORD_DATA, batchArgsWordData);
        jdbcTemplate.batchUpdate(INSERT_WORD_LIST, batchArgsWordList);
    }
}
