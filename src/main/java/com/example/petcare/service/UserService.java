package com.example.petcare.service;

import com.example.petcare.dto.SiteUserDto;
import com.example.petcare.entity.SiteUser;
import com.example.petcare.repository.SiteUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private SiteUserRepository userRepository;

    public SiteUserDto createUser(SiteUserDto userDto) {
        SiteUser created = userRepository.save(userDto.get_SiteUser());
        return created.get_SiteUserDto();
    }

    public SiteUserDto get_user(Long id){
        SiteUser user = userRepository.findById(id).orElse(null);
        return user!=null? user.get_SiteUserDto() : null;
    }
}
