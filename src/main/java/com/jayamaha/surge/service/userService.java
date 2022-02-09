package com.jayamaha.surge.service;

import com.jayamaha.surge.model.User;
import com.jayamaha.surge.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userService {

    @Autowired
    private userRepository usRepo;

    public User registerUser(User user){

        return usRepo.save(user);
    }

    public List<User> getAllusers(){
        return usRepo.findAll();
    }

    public User findbyID(Integer id){
        return  usRepo.findById(id).get();
    }
}
