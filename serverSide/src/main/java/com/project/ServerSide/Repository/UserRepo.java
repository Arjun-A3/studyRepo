package com.project.ServerSide.Repository;

import com.project.ServerSide.model.UserInfo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepo extends MongoRepository<UserInfo,String> {

    @Query("{username:'?0'}")
    default boolean existsByUsername(String username) {
        return false;
    }

    @Query("{email:'?0'}")
    default boolean existByEmail(String email) {
        return false;
    }

    @Query("{password:'?0'}")
     default boolean existByPass(String Pass) {
        return false;
    }
}
