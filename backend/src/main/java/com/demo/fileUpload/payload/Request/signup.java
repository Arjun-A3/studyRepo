package com.demo.fileUpload.payload.Request;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class signup {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String desc;
}
