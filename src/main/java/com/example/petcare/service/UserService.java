package com.example.petcare.service;

import com.example.petcare.dto.SiteUserDto;
import com.example.petcare.entity.SiteUser;
import com.example.petcare.repository.SiteUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private SiteUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public SiteUserDto createUser(SiteUserDto userDto) {
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        SiteUser created = userRepository.save(userDto.get_SiteUser());
        return created.get_SiteUserDto();
    }

    public SiteUserDto get_user_by_username(String username){
        SiteUser user = userRepository.findByUsername(username);
        return user!=null? user.get_SiteUserDto() : null;
    }
}
