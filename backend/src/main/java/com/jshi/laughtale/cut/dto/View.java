package com.jshi.laughtale.cut.dto;

import static jakarta.persistence.CascadeType.*;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.position.domain.Position;
import com.jshi.laughtale.speech.domain.Speech;
import com.jshi.laughtale.wordlist.domain.WordList;

import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

public class View {
	@Getter
	@Builder
	public static class CutSpeech {
		private Long id;
		private String sentence;
		// private Integer speechNo;
		private Position position;

	}

	@Getter

	public static class Request {

		private Long chapterId;
		private Integer page;
		private Integer size;
	}

	@Getter
	@Builder
	public static class Response {
		private String imageUrl;
		private Integer width;
		private Integer height;
		private List<CutSpeech> speeches;
	}

}
