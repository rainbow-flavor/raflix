package com.rainbowflavor.raflix.payload.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class MovieRequest {
    @NotBlank
    private Long id;
    @NotBlank
    private String token;
}
