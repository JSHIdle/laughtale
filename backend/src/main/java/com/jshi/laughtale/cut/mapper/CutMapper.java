package com.jshi.laughtale.cut.mapper;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.cut.domain.Cut;

import java.util.ArrayList;
import java.util.List;

public class CutMapper {

    public static Cut toEntity(Chapter chapter, int cutNo, String imageUrl, List<Integer> size) {
        return Cut.builder()
                .cutNo(cutNo)
                .imageUrl(imageUrl)
                .chapter(chapter)
                .width(size.get(0))
                .height(size.get(1))
                .speeches(new ArrayList<>())
                .build();
    }
}
