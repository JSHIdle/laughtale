package com.jshi.laughtale.cut.domain;

import com.jshi.laughtale.chapter.domain.Chapter;
import com.jshi.laughtale.speech.domain.Speech;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.CascadeType.PERSIST;

import net.minidev.json.annotate.JsonIgnore;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
@Getter
public class Cut {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Integer cutNo;
    @Column(length = 3000)
    private String imageUrl;
    @Column
    private Integer width;
    @Column
    private Integer height;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chapter_id")
    private Chapter chapter;

    @OneToMany(mappedBy = "cut", cascade = ALL, orphanRemoval = true)
    private List<Speech> speeches = new ArrayList<>();
}
