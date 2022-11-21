package main

import (
	"fmt"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/handler"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/rs/zerolog/log"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"net/http"
	"os"
)

func main() {
	dsn := os.Getenv("DSN_POSTGRES")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal().Msgf("%v", err)
	}
	if err := db.AutoMigrate(&model.BlogPost{}); err != nil {
		log.Fatal().Msgf("Migration Error: %v", err)
	}

	router := handler.NewRouter(db)

	port := os.Getenv("PORT")
	log.Info().Msgf("Now listening on port %v", port)
	if err := http.ListenAndServe(fmt.Sprintf(":%s", port), router); err != nil {
		log.Fatal().Msgf("Http Server Error: %v", err)
	}
}
