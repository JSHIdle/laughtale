package com.jshi.laughtale.quiz.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jshi.laughtale.quiz.service.QuizService;
import com.jshi.laughtale.security.details.CustomUserDetails;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {
	private final QuizService quizService;

	@GetMapping("/{chapterId}")
	public ResponseEntity<Void> makeNewQuiz(@AuthenticationPrincipal CustomUserDetails customUserDetails, @PathVariable int chapterId) {
		//새로운 퀴즈를 생성한다
		quizService.makeNewQuiz(customUserDetails, chapterId);

		return ResponseEntity.ok().build();
	}

}
