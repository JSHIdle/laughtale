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
        String imageUrl;
        @Setter
        List<String> sentence = new ArrayList<>();
        @Setter
        List<WordDataDetail.Response> words = new ArrayList<>();

        @Builder
        public Response(String imageUrl) {
            this.imageUrl = imageUrl;
        }
    }
}
