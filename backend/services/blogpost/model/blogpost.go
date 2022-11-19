package model

import (
	"gorm.io/gorm"
)

// BlogPost CreatedAtなどはGormが管理してくれるらしい
type BlogPost struct {
	gorm.Model
	ID    uint   `gorm:"primary_key" json:"id"`
	Title string `gorm:"not null" json:"title"`
	//CreatedAt    time.Time `gorm:"not null"`
	//LastEditedAt time.Time
	Contents string `gorm:"not null" json:"contents"`
}

func GetOne(db *gorm.DB, id string) *BlogPost {
	result := &BlogPost{}
	db.Where("ID = ?", id).First(&result)
	return result
}

func GetAll(db *gorm.DB) *[]BlogPost {
	result := &[]BlogPost{}
	db.Find(&result)
	return result
}
