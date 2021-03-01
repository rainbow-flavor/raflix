package com.rainbowflavor.raflix.repository;

import com.rainbowflavor.raflix.models.ERole;
import com.rainbowflavor.raflix.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataJpaRoleRepository extends JpaRepository<Role, Integer> , RoleRepository{
    @Override
    Optional<Role> findByName(ERole eRole);
}
