package com.jshi.laughtale.worddata.controller;

import com.jshi.laughtale.worddata.dto.WordDataDetail;
import com.jshi.laughtale.worddata.service.WordDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/word-data")
public class WordDataController {

    private final WordDataService wordDataService;

    @GetMapping("/{id}")
    public ResponseEntity<WordDataDetail.Response> getWordData(@PathVariable Long id) {
        return ResponseEntity.ok(wordDataService.loadWordDataDetail(id));
    }

    @GetMapping("/speech/{speechId}")
    public ResponseEntity<List<WordDataDetail.Response>> getWords(@PathVariable Long speechId) {
        return ResponseEntity.ok(wordDataService.loadWordDataDetailWithoutSpeech(speechId));
    }
}