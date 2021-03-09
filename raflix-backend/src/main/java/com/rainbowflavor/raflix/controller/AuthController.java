package com.rainbowflavor.raflix.controller;

import com.rainbowflavor.raflix.models.ERole;
import com.rainbowflavor.raflix.models.Role;
import com.rainbowflavor.raflix.models.User;
import com.rainbowflavor.raflix.payload.request.LoginRequest;
import com.rainbowflavor.raflix.payload.request.SignupRequest;
import com.rainbowflavor.raflix.payload.response.JwtResponse;
import com.rainbowflavor.raflix.payload.response.MessageResponse;
import com.rainbowflavor.raflix.repository.RoleRepository;
import com.rainbowflavor.raflix.repository.UserRepository;
import com.rainbowflavor.raflix.security.jwt.JwtUtils;
import com.rainbowflavor.raflix.security.services.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    @PostMapping("/auth/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                roles));
    }
    @PostMapping("/auth")
    public ResponseEntity<?> registerUser (@Valid @RequestBody SignupRequest signupRequest){
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
