package com.jshi.laughtale.cut.service;

<<<<<<< HEAD
=======
import com.jshi.laughtale.chapter.service.ChapterService;
import com.jshi.laughtale.cut.domain.Cut;
>>>>>>> b4f6e56 (feat : view cartoon)
import com.jshi.laughtale.cut.repository.CutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
import java.util.Currency;
=======
import java.util.List;
>>>>>>> b4f6e56 (feat : view cartoon)

@Service
@RequiredArgsConstructor
public class CutService {
    private final CutRepository cutRepository;
    private final ChapterService chapterService;

<<<<<<< HEAD
    private final CutRepository cutRepository;
=======
    public List<Cut> findCutsByChapter(Long chapterId) {
        return cutRepository.findByChapter(chapterService.findById(chapterId));
    }
>>>>>>> b4f6e56 (feat : view cartoon)
}
