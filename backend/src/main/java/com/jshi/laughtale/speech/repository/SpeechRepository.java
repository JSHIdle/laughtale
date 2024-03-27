package com.jshi.laughtale.speech.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jshi.laughtale.speech.domain.Speech;

import java.util.Optional;

public interface SpeechRepository extends JpaRepository<Speech,Long> {
}