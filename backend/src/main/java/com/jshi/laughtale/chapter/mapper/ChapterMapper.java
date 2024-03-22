package com.jshi.laughtale.chapter.mapper;

import com.jshi.laughtale.chapter.domain.Chapter;
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
        return ChapterListDto.Response.builder()
            .chapterNo(chapter.getChapterNo())
            .id(chapter.getId())
            .build();
    }

    public static Integer toChapterNo(Chapter chapter) {
        return chapter.getChapterNo();
    }
}
