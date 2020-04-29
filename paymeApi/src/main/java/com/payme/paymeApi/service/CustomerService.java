package com.payme.paymeApi.service;

import com.payme.paymeApi.model.Customer;
import com.payme.paymeApi.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public boolean saveCustomer(Customer customer){
        try{
            LocalDateTime now = LocalDateTime.now();
            customer.setDateTimeJoined(now);
            customerRepository.save(customer);
            return true;
        } catch(Exception e) {
            System.out.println(e);
            return false;
        }
    }

}

