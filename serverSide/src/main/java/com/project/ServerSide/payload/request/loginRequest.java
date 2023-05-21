package com.project.ServerSide.payload.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class loginRequest {
    private String userName;
    private String password;

    public loginRequest(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
}
