package main

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	dsn := ""
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
}
