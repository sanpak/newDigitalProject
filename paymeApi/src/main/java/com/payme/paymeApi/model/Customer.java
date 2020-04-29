package com.payme.paymeApi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @Column(name = "customer_id")
    private int id;

    @Column(name = "customer_email")
    private String email;

    @Column(name = "customer_first_name")
    private String firstName;

    @Column(name = "customer_last_name")
    private String lastName;

    @Column(name = "customer_bio")
    private String bio;

    @Column(name = "customer_picture")
    private String proPic;

    @Column(name = "date_time_joined")
    private LocalDateTime dateTimeJoined;

    public Customer(int id, String email, String firstName, String lastName, String bio, String proPic, LocalDateTime dateTimeJoined) {
        super();
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.proPic = proPic;
        this.dateTimeJoined = dateTimeJoined;
    }

    public Customer(String email, String firstName, String lastName, String bio, String proPic, LocalDateTime dateTimeJoined) {
        super();
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.proPic = proPic;
        this.dateTimeJoined = dateTimeJoined;
    }

    public Customer(String email, String firstName, String lastName, String bio, String proPic) {
        super();
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.proPic = proPic;
    }

    public Customer() {
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getProPic() {
        return proPic;
    }

    public void setProPic(String proPic) {
        this.proPic = proPic;
    }

    public LocalDateTime getDateTimeJoined() {
        return dateTimeJoined;
    }

    public void setDateTimeJoined(LocalDateTime dateTimeJoined) {
        this.dateTimeJoined = dateTimeJoined;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", bio='" + bio + '\'' +
                ", proPic='" + proPic + '\'' +
                ", dateTimeJoined=" + dateTimeJoined +
                '}';
    }
}
