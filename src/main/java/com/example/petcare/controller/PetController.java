package com.example.petcare.controller;

import com.example.petcare.dto.PetDto;
import com.example.petcare.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class PetController {
    @Autowired
    PetService petService;

    @PostMapping("/user/{userId}/pets")
    public ResponseEntity<PetDto> createPet(@RequestBody PetDto petDto, @PathVariable long userId) {
        PetDto createdDto = petService.createPet(petDto, userId);
        return ResponseEntity.status(HttpStatus.OK).body(createdDto);
    }

    @GetMapping("/user/{userId}/pets")
    public ResponseEntity<List<PetDto>> getPets(@PathVariable long userId) {
        List<PetDto> dtos = petService.get_pet_list(userId);
        return ResponseEntity.status(HttpStatus.OK).body(dtos);
    }


}