package com.rainbowflavor.raflix.models;

import java.io.Serializable;
//더 이상 사용하지 않는 FavoriteId 매핑을 위한 클래스
public class FavoriteId implements Serializable {

    private String user;
    private String movie;

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }
}
