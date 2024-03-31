package com.jshi.laughtale;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jshi.laughtale.manga.domain.Manga;
import com.jshi.laughtale.manga.repository.MangaRepository;
import com.jshi.laughtale.parser.MangaParser;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@SpringBootTest
public class ParserTest {

    private final String PATH = "C:\\Users\\SSAFY\\Desktop\\new_extract";
    @Autowired
    private MangaParser mangaParser;
    @Autowired
    private MangaRepository mangaRepository;

    @Test
    void parse() throws IOException {
        File folder = new File(PATH);


        List<File> files = Files.walk(folder.toPath())
                .filter(Files::isRegularFile)
                .map(Path::toFile)
                .toList();

        // 파일 목록 출력
        ObjectMapper mapper = new ObjectMapper();
        for (File file : files) {
            String title = file.getName();
            log.info("title : {}", title);
            try {
                // JSON 파일 읽어서 Map으로 변환
                Map map = mapper.readValue(new File(file.getPath()), Map.class);

                title = extractTitle(file.getName());
                Map result = (Map) map.get(title);
                Manga m = Manga.builder()
                        .title(title)
                        .chapterCnt(1)
                        .author((String) result.get("author"))
                        .category(((List<String>) result.get("genres")).stream().collect(Collectors.joining()))
                        .description((String) result.get("description"))
                        .level(0)
                        .chapter(new ArrayList<>())
                        .build();

                mangaParser.parser(m, map, 0);
                mangaRepository.save(m);
            } catch (Exception e) {
                log.error("filename : {}, message : {}", title, e.getMessage());
            }
        }
    }

    private String extractTitle(String src) {
        return src.substring(0, src.indexOf('.'));
    }
}
