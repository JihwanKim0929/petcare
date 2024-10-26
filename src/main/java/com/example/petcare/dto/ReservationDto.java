package com.example.petcare.dto;

import com.example.petcare.entity.Pet;
import com.example.petcare.entity.Reservation;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class ReservationDto {
    private Long id;

    Pet pet;

    private LocalDateTime reservationDate;

    private LocalDateTime createDate;

    private String hospitalName;

    @JsonIgnore
    public Reservation getReservation() {
        return Reservation.builder()
                .id(id)
                .pet(pet)
                .reservationDate(reservationDate)
                .createDate(createDate)
                .hospitalName(hospitalName)
                .build();
    }
}
