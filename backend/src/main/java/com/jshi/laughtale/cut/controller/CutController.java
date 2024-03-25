package com.jshi.laughtale.cut.controller;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.cut.dto.View;
import com.jshi.laughtale.cut.mapper.CutMapper;
import com.jshi.laughtale.cut.service.CutService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/cut")
@Slf4j
public class CutController {

	private final CutService cutService;

	@PostMapping("/images")
	public ResponseEntity<Page<View.Response>> readChapter(@RequestBody View.Request request) {
		Long chapterId = request.getChapterId();

		return ResponseEntity.ok(
			cutService.findCutsByChapter(chapterId, request.getPage(), request.getSize())
				.map(CutMapper::toChapterImage));
	}
}
