package com.jshi.laughtale.cut.controller;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.cut.dto.View;
import com.jshi.laughtale.cut.service.CutService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/cut")
public class CutController {

    @Autowired
    private CutService cutService;

    @PostMapping("/images")
    public ResponseEntity<List<Cut>> readChapter(@RequestBody View.Request request) {
        Long chapterId = request.getChapterId();
        return ResponseEntity.ok(cutService.findCutsByChapter(chapterId));
    }
}
