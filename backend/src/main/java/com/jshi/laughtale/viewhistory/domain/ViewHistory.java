package com.jshi.laughtale.viewhistory.domain;

import java.sql.Date;
import java.time.LocalDateTime;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.member.domain.Member;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
@Getter
@Setter
public class ViewHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(columnDefinition = "TIMESTAMP")
	private LocalDateTime viewDate;

	@ManyToOne
	@JoinColumn(name = "member_id")
	private Member member;
	@ManyToOne
	@JoinColumn(name = "chapter_id")
	private Chapter chapter;
	@ManyToOne
	@JoinColumn(name = "manga_id")
	private Manga manga;
	@PrePersist
	public void prePersist() {
		if (this.viewDate == null) {
			this.viewDate = LocalDateTime.now();
		}
	}
}
