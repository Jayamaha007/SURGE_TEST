package com.jayamaha.surge.controller;

import com.jayamaha.surge.model.User;
import com.jayamaha.surge.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/user")
public class userController {
    @Autowired
    private userService service;

    @PostMapping("/register")
    public String register(@RequestBody User user){
        service.registerUser(user);
        return "New user registerd";
    }

    @GetMapping("/getAll")
    public List<User> viewAllUsers(){
        return service.getAllusers();
    }

    @GetMapping("/{uname}/{pw}")
    public Integer getIDbyCreds(@PathVariable("uname") String uname, @PathVariable("pw") String pw){
        List<User> allUsers = service.getAllusers();
        int Uid=0;
        System.out.println();
        for(User u: allUsers){
            if (u.getUsername().equals(uname) && u.getPassword().equals(pw)){
                Uid = u.getUserID();

            }

        }

        return Uid;

    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getbyID(@PathVariable Integer id){
        try {

            User user = service.findbyID(id);
            return new ResponseEntity<User>(user,HttpStatus.OK);

        }
        catch (NoSuchElementException e){
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updatebyID(@RequestBody User user,@PathVariable Integer id){
        try {

            User userExisting = service.findbyID(id);
            service.registerUser(user);
            return new ResponseEntity<User>(user,HttpStatus.OK);

        }
        catch (NoSuchElementException e){
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }



}
