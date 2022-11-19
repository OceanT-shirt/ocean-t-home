package handler

import (
	"github.com/julienschmidt/httprouter"
	"github.com/rs/zerolog/log"
	"net/http"
)

func (h Handler) HandleRequest(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var err error
	id := p.ByName("id")
	if id == "/" {
		err = h.getAllBlog(w, r, p)
	} else {
		err = h.getOneBlog(w, r, p)
	}
	if err != nil {
		log.Fatal().Msgf("Http Server Error: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
