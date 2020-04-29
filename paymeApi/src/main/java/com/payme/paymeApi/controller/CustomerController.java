package com.payme.paymeApi.controller;


import com.payme.paymeApi.model.Customer;
import com.payme.paymeApi.model.User;
import com.payme.paymeApi.service.CustomerService;
import com.payme.paymeApi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping(path="/api")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping(path="/customers/add", produces = "application/json; charset=UTF-8")
    public ResponseEntity<?> createCustomer(@Valid @RequestBody Customer customer){
        try {
            customerService.saveCustomer(customer);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}