package com.jshi.laughtale.worddata.controller;

import com.jshi.laughtale.worddata.service.WordDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/word-data")
public class WordDataController {

    private final WordDataService wordDataService;

    @GetMapping("{id}")
    public ResponseEntity<Void> getWordData(@PathVariable Long id) {
        wordDataService.loadWordDataDetail(id);
        return ResponseEntity.ok().build();
    }
}
