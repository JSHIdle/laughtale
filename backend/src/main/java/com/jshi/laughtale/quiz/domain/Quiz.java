package com.jshi.laughtale.quiz.domain;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.myquiz.domain.MyQuiz;
import com.jshi.laughtale.wordlist.domain.WordList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
@Getter
public class Quiz {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private Integer optionNo;

	@ManyToOne
	@JoinColumn(name = "my_quiz_id")
	private MyQuiz myQuiz;

	@ManyToOne
	@JoinColumn(name = "word_list_id")
	private WordList wordList;

}
