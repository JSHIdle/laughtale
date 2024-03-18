package com.jshi.laughtale.line.domain;

import com.jshi.laughtale.position.domain.Position;
import com.jshi.laughtale.speech.domain.Speech;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
public class Line {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	Integer sentenceNo;

	@ManyToOne
	@JoinColumn(name = "speech_id")
	Speech speech;

	@OneToOne
	@JoinColumn(name ="position_id")
	Position position;

}
