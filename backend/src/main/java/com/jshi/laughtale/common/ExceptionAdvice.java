package com.jshi.laughtale.common;

import com.nimbusds.jwt.JWT;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import jakarta.servlet.ServletException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<AuthenticationException> authExceptionHandler(AuthenticationException e) {
        log.error("AuthenticationException : {}", e.getMessage());
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<AccessDeniedException> accessExceptionHandler(AccessDeniedException e) {
        log.error("AccessDenied : {}", e.getMessage());
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> runtimeExceptionHandler(RuntimeException e) {
        log.error("RuntimeException : {}", e.getMessage());
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

    @ExceptionHandler(BaseException.class)
    public ResponseEntity<String> baseExceptionHander(BaseException e) {
        log.error("BaseException : {}", e.getMessage());
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

    @ExceptionHandler(ServletException.class)
    public ResponseEntity<String> servletHandler(ServletException e) {
        log.error("ServletException : {}", e.getMessage());
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

    @ExceptionHandler({UnsupportedJwtException.class, MalformedJwtException.class, SignatureException.class, ExpiredJwtException.class})
    public ResponseEntity<String> jwtExceptionHandler(Exception e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("JWT expired");
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> exceptionHandler(Exception e) {
        log.error("Exception : {}", e.getMessage());
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
    }
}
