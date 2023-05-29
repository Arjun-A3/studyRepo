package com.demo.fileUpload.payload.Response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class messageResponse {
    private String message;
    public messageResponse(String message) {
        this.message = message;
    }
}