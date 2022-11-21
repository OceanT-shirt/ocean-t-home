package infra

import (
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/rs/zerolog/log"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
)

func Initdb() *gorm.DB {
	db := connectdb()
	_ = migratedb(db)
	return db
}

func connectdb() *gorm.DB {
	dsn := os.Getenv("DSN_POSTGRES")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal().Msgf("Gorm opening error: %v", err)
	}
	return db
}

func migratedb(db *gorm.DB) error {
	if err := db.AutoMigrate(&model.BlogPost{}); err != nil {
		log.Fatal().Msgf("Migration Error: %v", err)
		return err
	}
	return nil
}
