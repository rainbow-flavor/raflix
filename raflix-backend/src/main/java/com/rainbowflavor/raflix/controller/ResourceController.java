package com.rainbowflavor.raflix.controller;

import com.rainbowflavor.raflix.payload.request.MovieRequest;
import com.rainbowflavor.raflix.payload.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/resource")
@CrossOrigin(origins="*", maxAge = 3600)
public class ResourceController {

    //@PreAuthorize() 부현된 권한 확인
    @GetMapping("/movie/")
    public ResponseEntity Movie(MovieRequest movieRequest){
        Long id = movieRequest.getId();
        /**
         * TODO: 로그인을 성공적으로 마친 사용자에 대해서만 작동해야하는 요청
         */
        return ResponseEntity.ok(new MessageResponse("success get movie request"));
    }
}
