package com.jshi.laughtale.security.config;

import com.jshi.laughtale.security.Role;
import com.jshi.laughtale.security.handler.OAuth2FailureHandler;
import com.jshi.laughtale.security.handler.OAuth2SuccessHandler;
import com.jshi.laughtale.security.handler.SecurityAccessDeniedHandler;
import com.jshi.laughtale.security.handler.SecurityAuthenticationEntryPoint;
import com.jshi.laughtale.security.jwt.JwtAuthenticationFilter;
import com.jshi.laughtale.security.jwt.JwtAuthenticationProvider;
import java.util.Arrays;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Slf4j
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationProvider jwtAuthenticationProvider;
    private final SecurityAuthenticationEntryPoint securityAuthenticationEntryPoint;
    private final SecurityAccessDeniedHandler securityAccessHandler;
    private final OAuth2SuccessHandler oauth2SuccessHandler;
    private final OAuth2FailureHandler oauth2FailureHandler;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        return new ProviderManager(jwtAuthenticationProvider);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf(AbstractHttpConfigurer::disable);
        httpSecurity.sessionManagement(configurer -> configurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .formLogin(AbstractHttpConfigurer::disable)
                .httpBasic(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .exceptionHandling(handler -> {
                            handler.authenticationEntryPoint(securityAuthenticationEntryPoint);
                            handler.accessDeniedHandler(securityAccessHandler);
                        }
                )
                .addFilterAt(new JwtAuthenticationFilter(authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .authorizeHttpRequests(request -> request
                        .requestMatchers("/api/member/signup").permitAll()
                        .requestMatchers("/api/member/login").permitAll()
                        .requestMatchers("/api/member/role").hasRole(Role.ROLE_ADMIN.value())
                        .requestMatchers("/api/health").permitAll()  // 토큰 체크 필터 과정을 거치지 않는 경로 설정
//                        .anyRequest().authenticated())
                        .requestMatchers("/api/health").permitAll()  // 토큰 체크 필터 과정을 거치지 않는 경로 설정
                        .requestMatchers("/api/member/test").authenticated()
                        .anyRequest().permitAll())
                        // .anyRequest().authenticated())
                .oauth2Login(oauth ->
                        oauth
                                .defaultSuccessUrl("/")
                                .successHandler(oauth2SuccessHandler)
                                .failureHandler(oauth2FailureHandler)
                );
        return httpSecurity.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOriginPatterns(List.of("*"));
        configuration.setAllowedMethods(Arrays.asList("HEAD", "POST", "GET", "DELETE", "PUT", "PATCH"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}