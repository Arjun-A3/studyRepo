package com.demo.fileUpload.model;


import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "Authentication")
@Data
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Authentication {

    private String FirstName;

    private String LastName;

    private String Email;

    private String Password;
    private String desc;

}
