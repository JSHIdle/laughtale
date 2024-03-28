package com.jshi.laughtale.manga.domain;

import com.jshi.laughtale.chapter.domain.Chapter;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.parameters.P;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.CascadeType.PERSIST;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
@Table
@Getter
public class Manga {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String title;
    @Column
    private String author;
    @Column(length = 10000)
    private String description;
    @Column
    private Integer chapterCnt;
    @Column
    private String category;

    @Column(length = 1000)
    private String thumbnail;

    @Column
    private Integer level;

    @OneToMany(cascade = {PERSIST}, orphanRemoval = true, mappedBy = "manga")
    private List<Chapter> chapter = new ArrayList<>();

    public void update() {
        chapterCnt = chapter.size();
    }
    public void updateThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
    public void updateAuthor(String author) {
        this.author = author;
    }
}
