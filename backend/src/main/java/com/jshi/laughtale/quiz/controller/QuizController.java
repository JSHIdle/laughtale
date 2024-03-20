package com.jshi.laughtale.quiz.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jshi.laughtale.quiz.service.QuizService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {
	private final QuizService myQuizService;


	@PostMapping("/")
	public ResponseEntity<Void> makeNewQuiz(){
		//새로운 퀴즈를 생성한다
		myQuizService.makeNewQuiz();
		
		
		
		return ResponseEntity.ok().build();
	}
	

}
