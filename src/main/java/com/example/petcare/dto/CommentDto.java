package com.example.petcare.dto;

import com.example.petcare.entity.Board;
import com.example.petcare.entity.Comment;
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
public class CommentDto {
    private Long id;

    private String content;

    private Board board;

    private SiteUser author;

    private LocalDateTime createDate;

    private LocalDateTime modifyDate;

    @JsonIgnore
    public Comment getComment() {
        return Comment.builder()
                .id(id)
                .content(content)
                .board(board)
                .author(author)
                .createDate(createDate)
                .modifyDate(modifyDate)
                .build();
    }
}
