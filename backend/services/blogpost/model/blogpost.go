package model

import (
	"gorm.io/gorm"
)

type BlogPost struct {
	gorm.Model        // ID, CreatedAt, UpdatedAt, DeletedAt
	Title      string `gorm:"not null" json:"title"`
	Contents   string `gorm:"not null" json:"contents"`
}

func CreateBlogPost(title string, contents string) BlogPost {
	return BlogPost{
		Title:    title,
		Contents: contents,
	}
}