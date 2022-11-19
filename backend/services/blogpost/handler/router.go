package handler

import (
	"github.com/julienschmidt/httprouter"
	"github.com/rs/zerolog/log"
	"net/http"
)

func (h Handler) HandleRequest(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var err error
	log.Info().Msgf("%v", p.ByName("id"))
	if p.ByName("id") == "/" {
		log.Info().Msg("Now getting all posts")
		err = h.getAllBlog(w, r)
	} else {
		log.Info().Msg("Now getting one post")
		err = h.getOneBlog(w, r)
	}
	if err != nil {
		log.Fatal().Msgf("Http Server Error: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
