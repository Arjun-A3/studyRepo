package com.demo.fileUpload.payload.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class login {
    private String email;
    private String password;
    private String desc;
}
