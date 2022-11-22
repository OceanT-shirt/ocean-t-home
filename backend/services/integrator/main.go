package main

import (
	"fmt"
	"github.com/OceanT-shirt/ocean-t-home/services/integrator/handler"
	"github.com/rs/zerolog/log"
	"net/http"
	"os"
)

// main
// I'm planning to move auth from the blogpost service and make this work as a API gateway
// But now I'm not using this service
func main() {
	log.Info().Msg("Welcome to the Ocean-T-shirt Homepage Server!")

	router := handler.NewRouter()

	port := os.Getenv("PORT")

	if err := http.ListenAndServe(fmt.Sprintf(":%s", port), router); err != nil {
		log.Fatal().Msgf("Http Server Error: %v", err)
	}
}
