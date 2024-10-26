package com.example.petcare.controller;

import com.example.petcare.dto.SiteUserDto;
import com.example.petcare.entity.SiteUser;
import com.example.petcare.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping
    public ResponseEntity<SiteUserDto> createUser(@RequestBody SiteUserDto userDto) {
        SiteUserDto createdDto = userService.createUser(userDto);
        return ResponseEntity.status(HttpStatus.OK).body(createdDto);
    }

    @GetMapping
    public ResponseEntity<SiteUserDto> getUser() {
        System.out.println("인증 성공");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        SiteUserDto userDto = userService.get_user_by_username(username);
        return ResponseEntity.status(HttpStatus.OK).body(userDto);
    }


}

