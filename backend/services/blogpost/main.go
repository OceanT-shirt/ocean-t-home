package main

import (
	"fmt"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/handler"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/julienschmidt/httprouter"
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

	// TODO refactor router
	h := handler.New(db)
	mux := httprouter.New()
	mux.GET("/", h.Hello)
	//mux.GET("/posts/", h.HandleRequest)
	mux.GET("/posts/*id", h.HandleRequest)
	mux.POST("/posts/", h.PostBlog)
	mux.PUT("/posts/:id", h.UpdateBlog)
	mux.DELETE("/posts/:id", h.DeleteBlog)

	port := os.Getenv("PORT")
	log.Info().Msgf("Now listening on port %v", port)
	if err := http.ListenAndServe(fmt.Sprintf(":%s", port), mux); err != nil {
		log.Fatal().Msgf("Http Server Error: %v", err)
	}
}
