package main

import (
	"fmt"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/handler"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/infra"
	"github.com/rs/zerolog/log"
	"net/http"
	"os"
)

func main() {
	db := infra.Initdb()

	router := handler.NewRouter(db)

	port := os.Getenv("PORT")
	log.Info().Msgf("Now listening on port %v", port)
	if err := http.ListenAndServe(fmt.Sprintf(":%s", port), router); err != nil {
		log.Fatal().Msgf("Http Server Error: %v", err)
	}
}
