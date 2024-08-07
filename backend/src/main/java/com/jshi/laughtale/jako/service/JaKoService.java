package com.jshi.laughtale.jako.service;

import com.jshi.laughtale.jako.domain.JaKo;
import com.jshi.laughtale.jako.repository.JaKoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JaKoService {

    private final JaKoRepository jaKoRepository;

    public String loadWordMeaning(String from) {
        return jaKoRepository.findByLangFrom(from).map(JaKo::getParsedDef).orElse(null);
    }

    public Map<String, String> loadWordMeanings(List<String> words) {
        List<JaKo> jaKos = jaKoRepository.findByLangFromIn(words);
        return jaKos.stream()
                .collect(Collectors.toMap(JaKo::getLangFrom, JaKo::getParsedDef));
    }
}
