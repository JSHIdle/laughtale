package com.jshi.laughtale.quiz.domain;

import com.jshi.laughtale.chapter.domain.Chapter;
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
	Integer problemNo;
	@Column
	String problem;
	@Column
	String optionA;
	@Column
	String optionB;
	@Column
	String optionC;
	@Column
	String optionD;
	@Column
	Integer correctAnswer;

	@ManyToOne
	@JoinColumn(name = "chapter_id")
	Chapter chapter;

	@ManyToOne
	@JoinColumn(name = "word_list_id")
	WordList wordList;

}
