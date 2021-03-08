package com.rainbowflavor.raflix.repository;

import com.rainbowflavor.raflix.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SpringDataJpaUserRepository extends JpaRepository<User, Long>, UserRepository {

    @Override
    Optional<User> findByUsername(String name);

    @Override
    Boolean existsByUsername(String name);

}
