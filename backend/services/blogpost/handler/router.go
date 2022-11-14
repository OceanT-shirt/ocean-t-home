package handler

import (
	"github.com/rs/zerolog/log"
	"net/http"
)

func (h Handler) HandleRequest(w http.ResponseWriter, r *http.Request) {
	var err error
	switch r.Method {
	case "GET":
		err = h.getOneBlog(w, r)
	}
	if err != nil {
		log.Fatal().Msgf("Http Server Error: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
