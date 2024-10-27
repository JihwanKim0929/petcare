package com.example.petcare.service;

import com.example.petcare.dto.PetDto;
import com.example.petcare.entity.Pet;
import com.example.petcare.entity.SiteUser;
import com.example.petcare.repository.PetRepository;
import com.example.petcare.repository.SiteUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PetService {
    @Autowired
    PetRepository petRepository;
    @Autowired
    SiteUserRepository userRepository;

    public PetDto createPet(PetDto petDto, Long userId) {
        SiteUser siteUser = userRepository.findById(userId).orElse(null);
        petDto.setSiteUser(siteUser);
        Pet created = petRepository.save(petDto.get_Pet());
        return created.get_PetDto();
    }

    public PetDto get_pet(Long petId){
        Pet pet = petRepository.findById(petId).orElse(null);
        return pet!=null? pet.get_PetDto():null;
    }

    public List<PetDto> get_pet_list(Long userId){
        return petRepository.findByUserId(userId)
                .stream()
                .map(pet->pet.get_PetDto())
                .collect(Collectors.toList());
    }
}
