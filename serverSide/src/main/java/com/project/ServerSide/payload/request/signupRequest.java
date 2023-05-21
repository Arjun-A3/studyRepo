package com.project.ServerSide.payload.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@ToString

public class signupRequest
{
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private String role;
}
