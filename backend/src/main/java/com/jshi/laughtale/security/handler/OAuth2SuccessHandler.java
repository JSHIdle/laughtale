package com.jshi.laughtale.security.handler;

import com.jshi.laughtale.security.jwt.JwtProcessor;
import com.jshi.laughtale.security.oauth2.OAuth2UserPrincipal;
import com.jshi.laughtale.security.oauth2.UserInfo;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {
// todo : 성공 후 사용자 정보 반환 시 프론트 url 수정 필
    private final String BASE_URL = "http://localhost:5173";
    private final String ACCESS_HEADER = "accessToken";

    private final JwtProcessor jwtProcessor;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        OAuth2UserPrincipal principal = (OAuth2UserPrincipal) authentication.getPrincipal();

        UserInfo userInfo = principal.getUserInfo();

        String token = jwtProcessor.createJwtToken(userInfo.getEmail(), userInfo.getRole().value());

        response.sendRedirect(createUrl(token));
    }

    private String createUrl(String accessToken) {
        return UriComponentsBuilder.fromUriString(BASE_URL)
                .queryParam(ACCESS_HEADER, accessToken)
                .build()
                .encode()
                .toUriString();
    }
}
