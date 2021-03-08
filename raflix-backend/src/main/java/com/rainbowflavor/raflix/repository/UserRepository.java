package com.rainbowflavor.raflix.repository;

import com.rainbowflavor.raflix.models.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByUsername(String name);
    List<User> findAll();

    Boolean existsByUsername(String name);
}
