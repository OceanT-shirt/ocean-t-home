package handler

import (
	"github.com/rs/zerolog/log"
	"net/http"
)

func NewHttpError(w http.ResponseWriter, err error) {
	if err == nil {
		return
	}
	log.Error().Msgf("http server error: %v", err)
	emitError(w, err)
	return
}

func emitError(w http.ResponseWriter, err error) {
	if err == nil {
		return
	}
	http.Error(w, err.Error(), http.StatusInternalServerError)
	return
}
