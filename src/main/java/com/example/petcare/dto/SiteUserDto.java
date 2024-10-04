package com.example.petcare.dto;

import com.example.petcare.entity.SiteUser;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class SiteUserDto {

    private Long id;

    private String username;

    private String password;

    private String email;

    private String address;

    private String phone_num;

    @JsonIgnore
    public SiteUser get_SiteUser(){
        return SiteUser.builder()
                .id(id)
                .username(username)
                .password(password)
                .email(email)
                .address(address)
                .phone_num(phone_num)
                .build();
    }
}

