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

//func GetAll(db *gorm.DB) ([]BlogPost, error) {
//	tx := db.Find(&BlogPost{})
//	if err := tx.Error; err == nil {
//		return tx, nil
//	} else {
//		log.Error().Msgf("Database Error: %v", err)
//		return nil, err
//	}
//}

func GetOne(db *gorm.DB) *BlogPost {
	result := &BlogPost{}
	db.First(&result)
	return result
}
