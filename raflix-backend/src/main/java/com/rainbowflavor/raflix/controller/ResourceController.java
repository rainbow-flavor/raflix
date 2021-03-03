package com.rainbowflavor.raflix.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/resource")
@CrossOrigin(origins="*", maxAge = 3600)
public class ResourceController {

    @RequestMapping("/movie/list")
    public ResponseEntity movie(MovieRequest movieRequest){


    }
}
