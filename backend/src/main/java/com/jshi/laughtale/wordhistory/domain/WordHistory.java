package com.jshi.laughtale.wordhistory.domain;

import java.awt.*;
import java.time.LocalDateTime;

import com.jshi.laughtale.member.domain.Member;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.worddata.domain.WordData;

import jakarta.persistence.CollectionTable;
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
public class WordHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private Integer studyCnt;

	@Column
	private Integer offset;

	@Column(columnDefinition = "TIMESTAMP")
	private LocalDateTime studyDate;

	@ManyToOne
	@JoinColumn(name = "member_id")
	private Member member;
	@ManyToOne
	@JoinColumn(name = "word_id")
	private WordData wordData;

}
