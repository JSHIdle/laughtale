package com.jshi.laughtale.cut.service;


import com.jshi.laughtale.chapter.service.ChapterService;
import com.jshi.laughtale.cut.domain.Cut;

import com.jshi.laughtale.cut.repository.CutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Currency;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CutService {
    private final CutRepository cutRepository;
    private final ChapterService chapterService;

    public List<Cut> findCutsByChapter(Long chapterId) {
        return cutRepository.findByChapter(chapterService.findById(chapterId));
    }
}
