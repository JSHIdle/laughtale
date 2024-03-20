package com.jshi.laughtale.wordbookspeech.domain;

import java.awt.*;

import com.jshi.laughtale.member.domain.Member;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.wordbook.domain.WordBook;
import com.jshi.laughtale.worddata.domain.WordData;

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
public class WordBookSpeech {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "word_book_id")
	private WordBook wordBook;

	@ManyToOne
	@JoinColumn(name = "speech_id")
	private Speech speech;

}
