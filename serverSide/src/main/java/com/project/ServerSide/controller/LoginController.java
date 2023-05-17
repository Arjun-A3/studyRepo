package com.project.ServerSide.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomePage {
    @GetMapping("/")
    public String Home()
    {
        return "Hello world";
    }

}
