package com.jshi.laughtale.wordlist.controller;

import com.jshi.laughtale.worddata.dto.WordDataDetail;
import com.jshi.laughtale.wordlist.service.WordListService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/word-list")
@RequiredArgsConstructor
public class WordListController {

    private final WordListService wordListService;

    @GetMapping("/{speechId}")
    public ResponseEntity<List<WordDataDetail.Response>> getWordList(@PathVariable Long speechId) {
        return ResponseEntity.ok(wordListService.loadWordListBySpeechId(speechId));
    }

}
