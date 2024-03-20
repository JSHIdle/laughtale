package com.jshi.laughtale.wordlist.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.jshi.laughtale.wordlist.domain.WordList;
import com.jshi.laughtale.wordlist.dto.QuizWord;

public interface WordListRepository extends JpaRepository<WordList, Long> {
	 @Query(value = "select c.id as speech_id, "
		 + "    e.id as word_data_id, "
		 + "    e.word as word, "
		 + "    e.level as level "
		 + "from chapter a, "
		 + "	cut b,"
		 + "	speech c, "
		 + "    word_list d, "
		 + "    word_data e "
		 + "where a.id = b.chapter_id  "
		 + "and b.id = c.cut_id  "
		 + "    and c.id = d.speech_id "
		 + "    and d.word_id = e.id "
		 + "    and e.level = :level;", nativeQuery = true	)
	 	Optional<QuizWord>findWordListsWithLevel(@Param("level")int level);


}
