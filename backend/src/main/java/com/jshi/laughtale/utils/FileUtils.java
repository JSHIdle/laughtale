package com.jshi.laughtale.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;

public class FileUtils {

    private static final String SAVE_PATH = "C:\\Users\\SSAFY\\Desktop\\test\\";

    public static String save(MultipartFile file) throws IOException {
        String originalFilename = file.getOriginalFilename();
        Path path = Path.of(SAVE_PATH + originalFilename);
        if (!Files.exists(path)) {
            Files.createFile(path);
        }
        file.transferTo(path);
        return path.toString();
    }

    public static Resource loadToResource(String path) throws MalformedURLException {
        return new UrlResource("file:" + path);
    }
}