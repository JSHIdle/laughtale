package com.jshi.laughtale.speech.domain;

import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.position.domain.Position;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
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
public class Speech {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	String sentence;

	@Column
	Integer speechNo;

	@ManyToOne
	@JoinColumn(name="cut_id")
	Cut cut;

	@OneToOne
	@JoinColumn(name = "position_id")
	Position position;

}
