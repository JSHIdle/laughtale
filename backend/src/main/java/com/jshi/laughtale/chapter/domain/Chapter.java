package com.jshi.laughtale.chapter.domain;

import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.manga.domain.Manga;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.CascadeType.PERSIST;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
@Getter
public class Chapter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Integer chapterNo;
    @Column
    private Integer pageCnt;
    @Column
    private Integer level;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manga_id")
    private Manga manga;

    @OneToMany(mappedBy = "chapter", cascade = PERSIST, orphanRemoval = true)
    private List<Cut> cuts = new ArrayList<>();
}
