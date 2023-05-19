package com.project.ServerSide.Repository;

import com.project.ServerSide.model.pdfData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DataRepo extends MongoRepository<pdfData,Integer> {
}
