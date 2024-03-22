package com.jshi.laughtale.wordbook.controller;

import com.jshi.laughtale.security.details.CustomUserDetails;
import com.jshi.laughtale.wordbook.dto.WordBookBasic;
import com.jshi.laughtale.wordbook.service.WordBookService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/word-book")
@RequiredArgsConstructor
public class WordBookController {

    private final WordBookService wordBookService;

    @GetMapping("{level}")
    public ResponseEntity<List<WordBookBasic.Response>> getWordBook(
            @PathVariable int level,
            @AuthenticationPrincipal CustomUserDetails customUserDetails)
    {
        List<WordBookBasic.Response> wordBook = wordBookService.loadWordBook(level, customUserDetails.getId());
        return ResponseEntity.ok(wordBook);
    }
}
