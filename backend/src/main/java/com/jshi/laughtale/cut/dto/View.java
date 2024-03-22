package com.jshi.laughtale.cut.dto;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.speech.domain.Speech;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

public class View {
    @Getter
    @Builder
    public static class Request{
        private Long chapterId;
    }

    @Getter
    @Builder
    public static class Response{
        private String imageUrl;
        private Integer width;
        private Integer height;
        private List<Speech> speeches;
    }
}
