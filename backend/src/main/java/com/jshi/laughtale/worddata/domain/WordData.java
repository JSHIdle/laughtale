package com.jshi.laughtale.worddata.domain;

import com.jshi.laughtale.wordlist.domain.WordList;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
@Getter
public class WordData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String word;
	@Column
	private Integer level;
	@Column
	private String partOfSpeech;
	@Column
	private Integer frequency;
	@Column
	private String definition;

	public void updateFrequency() {
		this.frequency++;
	}
}
