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
//    @RequestMapping(value = "signup", method = RequestMethod.GET)
//    public String signup() {
//        return "signup";
//    }

//    @RequestMapping(value = "signup", method = RequestMethod.POST)
//    @PostMapping("/signup")
//        public String signupPost(@RequestParam("firstName") String FirstName, @RequestParam("lastName") String LastName, @RequestParam("email") String email, @RequestParam("password")  String password,@RequestParam("desc") String desc) {
//        repository.save(new Authentication(FirstName, LastName, email,password,desc));
//        return "success";
//
//    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody signup signup){
        repository.save(new Authentication(signup.getFirstName(),signup.getLastName(),signup.getEmail(),signup.getPassword(),signup.getDesc()));
        return ResponseEntity.ok(new messageResponse("User registered!!!"));
    }

//    @RequestMapping(value = "login", method = RequestMethod.GET)
//    public String login() {
//        return "login";
//    }
//    @RequestMapping(value = "login", method = RequestMethod.POST)
//    public boolean loginPost(@RequestParam("email") String email, @RequestParam("password")  String password) {
//        List<Authentication> list = repository.findAll();
//        for(int i = 0; i < list.size(); i++) {
//            if(email.equals(list.get(i).getEmail()) && password.equals(list.get(i).getPassword())) {
//                return true;
//            }
//        }
//        return false;
//    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody login Login){
        List<Authentication> list = repository.findAll();
        String email = Login.getEmail();
        String password = Login.getPassword();
        String desc = Login.getDesc();
        for(int i = 0; i < list.size(); i++) {
            if(email.equals(list.get(i).getEmail()) && password.equals(list.get(i).getPassword())&& desc.equals(list.get(i).getDesc())) {
                return ResponseEntity.ok(new messageResponse("Signin sucessfull"));
            }
        }
        return ResponseEntity.badRequest().body(new messageResponse("Signin failed"));

    }
}