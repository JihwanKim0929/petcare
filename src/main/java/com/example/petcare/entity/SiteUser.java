package com.example.petcare.entity;

import com.example.petcare.dto.SiteUserDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class SiteUser {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(unique=true)
    private String username;

    private String password;

    @Column(unique=true)
    private String email;

    private String address;

    private String phone_num;

//    @JsonIgnore
//    @OneToMany(mappedBy = "siteUser")
//    private List<Pet> petList;

    @JsonIgnore
    public SiteUserDto get_SiteUserDto(){
        return SiteUserDto.builder()
                .id(id)
                .username(username)
                .password(password)
                .email(email)
                .address(address)
                .phone_num(phone_num)
                .build();
    }
}

