package com.jshi.laughtale.chapter.mapper;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.chapter.dto.ChapterLevelDto;
import com.jshi.laughtale.chapter.dto.ChapterListDto;
import com.jshi.laughtale.manga.domain.Manga;

import java.util.ArrayList;

public class ChapterMapper {

    public static Chapter toEntity(Manga manga, int chapterNo, int pageCnt) {
        return Chapter.builder()
                .chapterNo(chapterNo)
                .pageCnt(pageCnt)
                .manga(manga)
                .cuts(new ArrayList<>())
                .build();
    }


    public static ChapterListDto.Response chapterToChapterListDto(Chapter chapter) {
        String thumbnailUrl = chapter.getCuts().isEmpty() ? "" : chapter.getCuts().get(0).getImageUrl();
        return ChapterListDto.Response.builder()
            .chapterNo(chapter.getChapterNo())
            .chapterId(chapter.getId())
            .thumbnail(thumbnailUrl)
            .level(chapter.getLevel())
            .build();
    }

    public static ChapterLevelDto.Response chapterToChapterLevelDto(Chapter chapter){
        return ChapterLevelDto.Response.builder()
            .chapterNo(chapter.getChapterNo())
            .chapterId(chapter.getId())
            .level(chapter.getLevel())
            .build();
    }

    public static Integer toChapterNo(Chapter chapter) {
        return chapter.getChapterNo();
    }
}
