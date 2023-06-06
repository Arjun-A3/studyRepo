package com.demo.fileUpload.controller;



import com.demo.fileUpload.model.Authentication;
import com.demo.fileUpload.payload.Request.login;
import com.demo.fileUpload.payload.Request.signup;
import com.demo.fileUpload.payload.Response.messageResponse;
import com.demo.fileUpload.service.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("auth")
public class UserController {
    @Autowired
    Repository repository;
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody signup signup){
        repository.save(new Authentication(signup.getFirstName(),signup.getLastName(),signup.getEmail(),signup.getPassword(),signup.getDesc()));
        return ResponseEntity.ok(new messageResponse("User registered!!!"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody login Login){
        List<Authentication> list = repository.findAll();
        String email = Login.getEmail();
        String password = Login.getPassword();
        String desc = Login.getDesc();
        for(int i = 0; i < list.size(); i++) {
            if(email.equals(list.get(i).getEmail()) && password.equals(list.get(i).getPassword())&& desc.equals(list.get(i).getDesc())) {
                return ResponseEntity.ok(new messageResponse(list.get(i).getDesc()));
            }
        }
        return ResponseEntity.badRequest().body(new messageResponse("Signin failed"));

    }
    @PostMapping("/verify")
    public ResponseEntity<?> verify (@RequestBody signup signup){
        List<Authentication> list = repository.findAll();
        String email = signup.getEmail();
        for(int i=0;i< list.size();i++){
            if(email.equals(list.get(i).getEmail())){
                return ResponseEntity.badRequest().body(new messageResponse("Email alredy exist"));
            }
        }
        return ResponseEntity.ok().body(new messageResponse("Valid"));
    }
}