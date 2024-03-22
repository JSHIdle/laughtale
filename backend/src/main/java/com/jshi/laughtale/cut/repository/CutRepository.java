package com.jshi.laughtale.cut.repository;

<<<<<<< HEAD
import com.jshi.laughtale.cut.domain.Cut;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CutRepository extends JpaRepository<Cut, Long> {
}
=======
import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.cut.domain.Cut;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CutRepository extends JpaRepository<Cut, Long> {
    List<Cut> findByChapter(Chapter chapter);
}
>>>>>>> b4f6e56 (feat : view cartoon)
