package com.jshi.laughtale.manga.controller;

import com.jshi.laughtale.manga.dto.MangaUpload;
import com.jshi.laughtale.manga.service.MangaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/manga")
public class MangaController {

    private final MangaService adminService;

    @PostMapping("/upload")
    public ResponseEntity<Void> upload(
            @RequestPart MultipartFile thumbnail,
            @RequestPart MangaUpload.Request manga,
            @RequestPart List<MultipartFile> files
    ) throws IOException {
        adminService.upload(thumbnail, manga, files);
        return ResponseEntity.ok().build();
    }
}
