package com.project.ServerSide.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString


@Document(collection = "CSBS")
public class pdfData {
    @Id
    private int id;
    private String pdfName;
    private int sem;
    private String dept;
    private String subject;

}
