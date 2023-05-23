package com.project.ServerSide.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collection;
@Getter
@Setter
@ToString
@Document(collection = "CSBS")
public class LoadFile {

    private String filename;
    private String fileType;
    private String fileSize;
    private byte[] file;


    public LoadFile(byte[] fileData, String filename, org.bson.Document metadata) {
    }

    public LoadFile() {

    }
}