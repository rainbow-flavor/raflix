package com.rainbowflavor.raflix.repository;

import com.rainbowflavor.raflix.models.ERole;
import com.rainbowflavor.raflix.models.Role;

import java.util.Optional;

public interface RoleRepository {
    Optional<Role> findByName(ERole eRole);
}
