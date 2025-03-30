package com.team3.personal_date.core.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ClientNotFoundException extends RuntimeException {
    public ClientNotFoundException(String msg) {
        super(msg);
    }
}
