package com.payme.paymeApi.controller;

import com.payme.paymeApi.model.User;
import com.payme.paymeApi.repository.UserRepository;
import com.payme.paymeApi.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

@Controller
@RequestMapping(path="/api")
//@Tag(name = "User", description = "User controller")
public class UserController {

    @Autowired
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path="/users/add", produces = "application/json; charset=UTF-8")
    public ResponseEntity<?> createUser(@Valid @RequestBody User user){
        try {
            userService.saveUser(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(path="/users/delete", produces = "application/json; charset=UTF-8")
    public ResponseEntity<?> deleteUser(@Valid @RequestBody User user){
        try {
            userService.deleteUser(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(path="/users", produces = "application/json; charset=UTF-8")
    public ResponseEntity<?> getAllUsers(){
        try {
            Iterable<User> userDomains = userService.getUserUrls();
            return new ResponseEntity<>(userDomains, HttpStatus.OK);
        } catch(Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
