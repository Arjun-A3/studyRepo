package com.demo.fileUpload.service;


import com.demo.fileUpload.model.Authentication;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface Repository extends MongoRepository<Authentication, Integer> {

}
