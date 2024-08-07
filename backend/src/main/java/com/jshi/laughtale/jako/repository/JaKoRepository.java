package com.jshi.laughtale.jako.repository;

import com.jshi.laughtale.jako.domain.JaKo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface JaKoRepository extends JpaRepository<JaKo, Integer> {
    Optional<JaKo> findByLangFrom(String word);

    @Query("SELECT j FROM JaKo j WHERE j.langFrom IN :words")
    List<JaKo> findByLangFromIn(@Param("words") List<String> words);
}
