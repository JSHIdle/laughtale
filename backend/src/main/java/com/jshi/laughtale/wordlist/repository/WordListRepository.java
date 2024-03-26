package com.jshi.laughtale.wordlist.repository;

import com.jshi.laughtale.quiz.dto.TempDTO;
import com.jshi.laughtale.worddata.domain.WordData;
import com.jshi.laughtale.worddata.dto.WordDataDetail;
import com.jshi.laughtale.wordlist.domain.WordList;
import com.jshi.laughtale.quiz.dto.QuizWord;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

import jakarta.persistence.Tuple;

public interface WordListRepository extends JpaRepository<WordList, Long> {
	// @Query(value = "SELECT \n"
	// 	+ "    e.id AS word_data_id,\n"
	// 	+ "    e.word AS answer_word,\n"
	// 	+ "    e.level AS level,\n"
	// 	+ "    MAX(d.id) AS word_list_id,\n"
	// 	+ "    (SELECT word_list.speech_id \n"
	// 	+ "     FROM word_list \n"
	// 	+ "     WHERE word_list.id = MAX(d.id)) AS speech_id\n"
	// 	+ "FROM \n"
	// 	+ "    chapter a\n"
	// 	+ "INNER JOIN \n"
	// 	+ "    cut b ON a.id = b.chapter_id\n"
	// 	+ "INNER JOIN \n"
	// 	+ "    speech c ON b.id = c.cut_id\n"
	// 	+ "INNER JOIN \n"
	// 	+ "    word_list d ON c.id = d.speech_id\n"
	// 	+ "INNER JOIN \n"
	// 	+ "    word_data e ON d.word_id = e.id\n"
	// 	+ "WHERE \n"
	// 	+ "    e.level = :level AND a.id = :chapterId "
	// 	+ "GROUP BY \n"
	// 	+ "    word_data_id, \n"
	// 	+ "    answer_word, \n"
	// 	+ "    level\n"
	// 	+ "ORDER BY \n"
	// 	+ "    word_data_id", nativeQuery = true)
	// List<Tuple> findWordListsWithLevel(int level, int chapterId);

	@Query(value = "SELECT x.*, z.id AS speech_id, z.sentence AS sentence , w.definition AS definition FROM (\n"
		+ "SELECT "
		+ "    e.id AS word_data_id, "
		+ "    e.word AS answer_word,"
		+ "    e.level AS level, "
		+ "    MAX(d.id) AS word_list_id "
		+ "FROM "
		+ "    chapter a "
		+ "INNER JOIN "
		+ "    cut b ON a.id = b.chapter_id "
		+ "INNER JOIN "
		+ "    speech c ON b.id = c.cut_id "
		+ "INNER JOIN "
		+ "    word_list d ON c.id = d.speech_id "
		+ "INNER JOIN "
		+ "    word_data e ON d.word_id = e.id "
		+ "WHERE "
		+ "    e.level = :level AND a.id = :chapterId "
		+ "GROUP BY "
		+ "    word_data_id, "
		+ "    answer_word, "
		+ "    level "
		+ "ORDER BY "
		+ "    word_data_id) x , word_list y, speech z, word_data w where x.word_list_id = y.id and y.speech_id = z.id and x.word_data_id = w.id", nativeQuery = true)
	List<Tuple> findWordListsWithLevel(int level, int chapterId);



	List<WordList> findAllByWordData(WordData wordData);

	WordList findByWordDataIdAndSpeechId(Long wordId, Long speechId);
}
