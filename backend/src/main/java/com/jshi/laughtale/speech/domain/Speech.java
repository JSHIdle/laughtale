package com.jshi.laughtale.speech.domain;

import static jakarta.persistence.CascadeType.PERSIST;

import com.jshi.laughtale.cut.domain.Cut;
import com.jshi.laughtale.position.domain.Position;
import com.jshi.laughtale.wordlist.domain.WordList;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
@Getter
public class Speech {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String sentence;

    @Column
    private Integer speechNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cut_id")
    @Setter
    private Cut cut;

    @OneToOne(cascade = PERSIST, optional = true)
    @JoinColumn(name = "position_id")
    private Position position;

    @OneToMany(mappedBy = "speech", orphanRemoval = true, cascade = PERSIST)
    @Setter
    private List<WordList> wordLists = new ArrayList<>();

}
