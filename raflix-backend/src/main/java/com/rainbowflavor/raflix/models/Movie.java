package com.rainbowflavor.raflix.models;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String genre;

    private String actor;

    @OneToMany(mappedBy = "movie")
    private List<Favorite> favoriteList = new ArrayList<>();

    public Movie(String title, String description, String genre, String actor) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.actor = actor;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setActor(String actor) {
        this.actor = actor;
    }
}
