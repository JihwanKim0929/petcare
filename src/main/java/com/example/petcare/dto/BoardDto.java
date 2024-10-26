package com.example.petcare.dto;

import com.example.petcare.entity.Board;
import com.example.petcare.entity.SiteUser;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class BoardDto {
    private Long id;

    private String title;

    private String content;

    private LocalDateTime createDate;

    private SiteUser author;

    private LocalDateTime modifyDate;

    @JsonIgnore
    public Board getBoard() {
        return Board.builder()
                .id(id)
                .title(title)
                .content(content)
                .createDate(createDate)
                .author(author)
                .modifyDate(modifyDate)
                .build();
    }
}
