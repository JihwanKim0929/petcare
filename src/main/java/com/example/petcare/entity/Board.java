package com.example.petcare.entity;

import com.example.petcare.dto.BoardDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Board {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String content;

    private LocalDateTime createDate;

    @ManyToOne
    private SiteUser author;

    private LocalDateTime modifyDate;

    @JsonIgnore
    public BoardDto getBoardDto() {
        return BoardDto.builder()
                .id(id)
                .title(title)
                .content(content)
                .createDate(createDate)
                .modifyDate(modifyDate)
                .author(author)
                .build();
    }

}