package com.jshi.laughtale.quiz.controller;

import com.jshi.laughtale.quiz.dto.QuizWord;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import com.jshi.laughtale.quiz.service.QuizService;
import com.jshi.laughtale.security.details.CustomUserDetails;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {
    private final QuizService quizService;

    @GetMapping("/{chapterId}")
    public ResponseEntity<List<QuizWord>> makeNewQuiz(@AuthenticationPrincipal CustomUserDetails customUserDetails, @PathVariable int chapterId) {
        //TODO : 해당 사용자가 퀴즈를 이미 만들었다면 삭제하고 진행한다 -> ex) 새로고침 상황
        //새로운 퀴즈를 생성한다
        List<QuizWord> quiz = quizService.makeNewQuiz(customUserDetails.getId(), chapterId);
        //생성된 퀴즐르 DB에 저장한다
        quizService.saveNewQuiz(quiz, customUserDetails.getId());
        return ResponseEntity.ok(quiz);
    }


    @PostMapping("/{chapterId}")
    public ResponseEntity<Void> quizResult(@AuthenticationPrincipal CustomUserDetails customUserDetails, @PathVariable int chapterId) {
        //TODO : 퀴즈 결과를 받아서 가중치가 변경되도록 기록한다. 또한, 퀴즈를 삭제한다. 퀴즈가 만약 존재하지 않는다면 반영 X
        return ResponseEntity.ok().build();
    }

}
