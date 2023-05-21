package com.project.ServerSide.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "User_info")
public class UserInfo {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private String role;

    public UserInfo(String id, String name, String email, String password, String role) {
        this.id = id;
        this.username = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }


}
