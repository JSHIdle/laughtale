package com.jshi.laughtale.cut.domain;

import org.hibernate.annotations.CollectionId;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.manga.domain.Manga;

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
public class Cut {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	Integer cutNo;
	@Column(length = 3000)
	String imageUrl;
	@ManyToOne
	@JoinColumn(name = "chapter_id")
	Chapter chapter;
}
