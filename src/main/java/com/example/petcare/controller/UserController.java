package com.example.petcare.controller;

import com.example.petcare.dto.SiteUserDto;
import com.example.petcare.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/{id}")
    public ResponseEntity<SiteUserDto> getUser(@PathVariable long id) {
        SiteUserDto userDto = userService.get_user(id);
        return ResponseEntity.status(HttpStatus.OK).body(userDto);
    }
}

