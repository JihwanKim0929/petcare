package com.example.petcare.service;

import com.example.petcare.dto.SiteUserDto;
import com.example.petcare.entity.SiteUser;
import com.example.petcare.repository.SiteUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private SiteUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public SiteUserDto createUser(MultipartFile image, SiteUserDto userDto) throws IOException {
        if(!image.isEmpty()){
            String fileName = UUID.randomUUID().toString().replace("-", "")+"_"+image.getOriginalFilename();
            String fullPathName = "C:\\spring_image_test\\user_thumbnail\\"+fileName;
            image.transferTo(new File(fullPathName));
            userDto.setImage_url(fullPathName);
        }

        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        SiteUser created = userRepository.save(userDto.get_SiteUser());
        return created.get_SiteUserDto();
    }

    public SiteUserDto get_user_by_username(String username){
        SiteUser user = userRepository.findByUsername(username);
        return user!=null? user.get_SiteUserDto() : null;
    }

    public SiteUserDto get_user_by_useremail(String email) {
        SiteUser user = userRepository.findByEmail(email);
        return user != null ? user.get_SiteUserDto() : null;
    }

    public SiteUserDto login(String email, String password) {
        SiteUserDto userDto = get_user_by_useremail(email);
        if (userDto != null && passwordEncoder.matches(password, userDto.getPassword())) {
            return userDto;
        }
        return null;
    }
}
