package com.rainbowflavor.raflix.payload.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
public class SignupRequest {
    @NotBlank
    @Email
    @Size(max = 50)
    private String username;

    @NotBlank
    @Size(min=8, max=20)
    private String password;

    private Set<String> role;
}
