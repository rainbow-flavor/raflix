package com.rainbowflavor.raflix.models;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "users",
        uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //NotBlack은 null or "" or " "을 비허용한다
    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

    //FetchType.Lazy (게으르다고 생각하자)
    //join 을 하는데, 부모격인 users 엔티티를 조회할 때 해당 엔티티는 조회하지 않고 프록시 객체를 넣어둠
    //실제로 이 데이터를 필요로 할 때 비로소 실제 객체를 초기화해서 넣어준다
    //FetchType.EAGER (미뤄둿다 못한다고 생각하자) - 얘는 user 엔티티 조회하면 무조건 자식 엔티티도 조회한다
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User(String username, String email, String password, Set<Role> roles) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }

    public User() {

    }
}
