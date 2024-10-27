package com.example.petcare.dto;

import com.example.petcare.entity.Diary;
import com.example.petcare.entity.Pet;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class DiaryDto {
    private Long id;

    private String title;

    private Pet pet;

    private LocalDateTime createDate;

    @JsonIgnore
    public Diary getDiary() {
        return Diary.builder()
                .id(id)
                .title(title)
                .pet(pet)
                .createDate(createDate)
                .build();
    }
}