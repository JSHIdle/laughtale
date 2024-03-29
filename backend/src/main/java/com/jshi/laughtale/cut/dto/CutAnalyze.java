package com.jshi.laughtale.cut.dto;

import com.jshi.laughtale.worddata.dto.WordDataDetail;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

public class CutAnalyze {

    @Getter
    public static class Response {
        private String imageUrl;
        private Integer width;
        private Integer height;
        @Setter
        private List<String> sentence = new ArrayList<>();
        @Setter
        private List<WordDataDetail.Response> words = new ArrayList<>();

        @Builder
        public Response(String imageUrl, Integer width, Integer height) {
            this.imageUrl = imageUrl;
            this.width = width;
            this.height = height;
        }
    }
}
