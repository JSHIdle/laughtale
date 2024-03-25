package com.jshi.laughtale.member.controller;

import com.jshi.laughtale.member.dto.MemberUpdate;
import com.jshi.laughtale.member.service.MemberService;
import com.jshi.laughtale.security.details.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PatchMapping("/modify")
    public ResponseEntity<Void> update(
            @AuthenticationPrincipal CustomUserDetails customUserDetails,
            @RequestBody MemberUpdate.Request update
    ) {
        memberService.update(customUserDetails, update);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/role")
    public ResponseEntity<Void> updateRole(
            @RequestBody MemberUpdate.RoleRequest update
    ) {
        memberService.updateRole(update);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping
    public ResponseEntity<Void> withdraw(
            @AuthenticationPrincipal CustomUserDetails customUserDetails
    ) {
        memberService.withdraw(customUserDetails);
        return ResponseEntity.ok().build();
    }
}
