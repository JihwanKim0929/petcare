package com.example.petcare.dto;


import com.example.petcare.entity.Pet;
import com.example.petcare.entity.SiteUser;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PetDto {

    private Long id;

    private SiteUser siteUser;

    private String name;

    private int age;

    private String gender;

    private String species;

    private int weight;

    private String description;

    private String image_url;

    public Pet get_Pet(){
        return Pet.builder()
                .id(id)
                .siteUser(siteUser)
                .name(name)
                .age(age)
                .gender(gender)
                .species(species)
                .weight(weight)
                .description(description)
                .image_url(image_url)
                .build();
    }
}


