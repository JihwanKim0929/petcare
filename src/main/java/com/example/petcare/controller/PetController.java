package com.example.petcare.controller;

import com.example.petcare.dto.PetDto;
import com.example.petcare.service.PetService;
import com.example.petcare.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class PetController {
    @Autowired
    PetService petService;
    @Autowired
    UserService userService;

    @PostMapping("/user/pets")
    public ResponseEntity<PetDto> createPet(@RequestBody PetDto petDto) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        Long userId = userService.get_user_by_username(username).getId();
        PetDto createdDto = petService.createPet(petDto, userId);
        return ResponseEntity.status(HttpStatus.OK).body(createdDto);
    }

    @GetMapping("/user/pets")
    public ResponseEntity<List<PetDto>> getPets() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        Long userId = userService.get_user_by_username(username).getId();
        List<PetDto> dtos = petService.get_pet_list(userId);
        return ResponseEntity.status(HttpStatus.OK).body(dtos);
    }


}