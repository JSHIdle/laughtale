package com.jshi.laughtale.position.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Position {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	Integer leftTopX;
	@Column
	Integer leftTopY;

	@Column
	Integer rightTopX;
	@Column
	Integer rightTopY;

	@Column
	Integer leftBottomX;
	@Column
	Integer leftBottomY;

	@Column
	Integer rightBottomX;
	@Column
	Integer rightBottomY;
}
