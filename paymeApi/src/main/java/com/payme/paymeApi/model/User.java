package com.payme.paymeApi.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private int id;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_url_name")
    private String urlName;

    @Column(name = "user_short_bio")
    private String shortBio;

    @Column(name = "user_picture")
    private String picture;

    public User(int id, String name, String urlName, String shortBio, String picture) {
        super();
        this.id = id;
        this.name = name;
        this.urlName = urlName;
        this.shortBio = shortBio;
        this.picture = picture;
    }

    public User(String name, String urlName, String shortBio, String picture) {
        super();
        this.name = name;
        this.urlName = urlName;
        this.shortBio = shortBio;
        this.picture = picture;
    }

    public User(String urlName) {
        super();
        this.urlName = urlName;
    }

    public User(){
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrlName() {
        return urlName;
    }

    public void setUrlName(String urlName) {
        this.urlName = urlName;
    }

    public String getShortBio() {
        return shortBio;
    }

    public void setShortBio(String shortBio) {
        this.shortBio = shortBio;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", urlName='" + urlName + '\'' +
                ", shortBio='" + shortBio + '\'' +
                ", picture='" + picture + '\'' +
                '}';
    }
}
