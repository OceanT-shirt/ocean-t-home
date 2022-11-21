package model

import (
	"gorm.io/gorm"
)

// BlogPost CreatedAtなどはGormが管理してくれるらしい
type BlogPost struct {
	gorm.Model
	ID       uint   `gorm:"primary_key" json:"id"`
	Title    string `gorm:"not null" json:"title"`
	Contents string `gorm:"not null" json:"contents"`
}
