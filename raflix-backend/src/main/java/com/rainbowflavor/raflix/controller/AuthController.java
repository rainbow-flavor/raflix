package com.rainbowflavor.raflix.controller;

import com.rainbowflavor.raflix.models.ERole;
import com.rainbowflavor.raflix.models.Role;
import com.rainbowflavor.raflix.models.User;
import com.rainbowflavor.raflix.payload.request.SignupRequest;
import com.rainbowflavor.raflix.payload.response.MessageResponse;
import com.rainbowflavor.raflix.repository.RoleRepository;
import com.rainbowflavor.raflix.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/auth")
    public ResponseEntity<?> registerUser (@RequestBody SignupRequest signupRequest){
        if(userRepository.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse(signupRequest.getUsername() + "is not unique email"));
        }

        Set<String> requestRole = signupRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if(requestRole == null){
            Role userRole = roleRepository.findByName(ERole.ROLE_USER).orElseThrow();
            roles.add(userRole);
        }


        User user = new User(signupRequest.getUsername(),
                            passwordEncoder.encode(signupRequest.getPassword()),
                            roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("signup successful"));
    }
}
