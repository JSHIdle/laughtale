package com.jshi.laughtale.wordlist.dto;

import java.util.List;
import java.util.Set;

import com.jshi.laughtale.position.domain.Position;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class QuizWord {
	// private Long chapterId;
	// private Long cutId;
	private Long speechId;
	// private Long wordListId;
	private Long wordDataId;
	private Integer level;

	private String word;
	private int weight;

	private Integer leftTopX;
	private Integer leftTopY;

	private Integer rightTopX;
	private Integer rightTopY;

	private Integer leftBottomX;
	private Integer leftBottomY;

	private Integer rightBottomX;
	private Integer rightBottomY;

	private String imageUrl;

	private List<String> optionSet;
	private String definition;
	public void addPositionToQuizWord(Position position) {
		this.setLeftTopX(position.getLeftTopX());
		this.setLeftTopY(position.getLeftTopY());

		this.setRightTopX(position.getRightTopX());
		this.setRightTopY(position.getRightTopY());

		this.setLeftBottomX(position.getLeftBottomX());
		this.setLeftBottomY(position.getLeftBottomY());

		this.setRightBottomX(position.getRightBottomX());
		this.setRightBottomY(position.getRightBottomY());

	}
}
