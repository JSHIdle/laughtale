package com.jshi.laughtale.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Map;

@Slf4j
public class FileUtils {

    private static final String SAVE_PATH = System.getenv("SAVE_PATH");

    public static String save(MultipartFile file, String... variable) throws IOException {
        log.info("SAVE_PATH: {}", SAVE_PATH);
        String originalFilename = file.getOriginalFilename();
        variable = Arrays.copyOf(variable, variable.length + 1);
        variable[variable.length - 1] = originalFilename;
        Path path = Path.of(SAVE_PATH, variable);
        if (!Files.exists(path.getParent())) {
            Files.createDirectories(path.getParent());
        }

        if (!Files.exists(path)) {
            Files.createFile(path);
        }
        file.transferTo(path);
        return path.toString();
    }
}
