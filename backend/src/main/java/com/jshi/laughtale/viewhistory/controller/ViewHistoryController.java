package com.jshi.laughtale.viewhistory.controller;

import com.jshi.laughtale.security.details.CustomUserDetails;
import com.jshi.laughtale.viewhistory.service.ViewHistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/history")
@RequiredArgsConstructor
public class ViewHistoryController {

    private final ViewHistoryService viewHistoryService;

    @PostMapping("/{title}/{chapterNo}")
    public ResponseEntity<Void> createHistory(
            @PathVariable String title,
            @PathVariable Integer chapterNo,
            @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        viewHistoryService.createHistory(title, chapterNo, customUserDetails.getId());
        return ResponseEntity.ok().build();
    }
}
