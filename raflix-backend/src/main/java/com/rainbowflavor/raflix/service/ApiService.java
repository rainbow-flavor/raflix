package com.rainbowflavor.raflix.service;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;
@RequiredArgsConstructor
@Service
public class ApiService {

    private final RestTemplate restTemplate;

    private HttpHeaders header = new HttpHeaders();
    private HttpEntity<?> entity = new HttpEntity<>(header);

    @PostConstruct
    public ResponseEntity get(){
        ResponseEntity<Map> exchange = restTemplate.exchange("https://yts-proxy.now.sh/list_movies.json?sort_by=rating", HttpMethod.GET, entity, Map.class);
        return exchange;
    }
}
