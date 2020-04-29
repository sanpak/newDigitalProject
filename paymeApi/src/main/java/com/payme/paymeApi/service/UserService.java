package com.payme.paymeApi.service;

import com.payme.paymeApi.model.User;
import com.payme.paymeApi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean saveUser(User user){
        try{
            userRepository.save(user);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

    public boolean deleteUser(User user){
        try{
            userRepository.delete(user);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

    public  Iterable<User> getUserUrls(){
        try{
            return userRepository.findAll();
        } catch(Exception e) {
            System.out.println(e);
            return null;
        }
    }

}
