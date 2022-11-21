package handler

import (
	"github.com/julienschmidt/httprouter"
	"github.com/rs/zerolog/log"
	"gorm.io/gorm"
	"net/http"
)

func NewRouter(db *gorm.DB) *httprouter.Router {
	h := New(db)
	mux := httprouter.New()
	mux.GET("/", h.Hello)
	//mux.GET("/posts/", h.HandleRequest)
	mux.GET("/posts/*id", h.HandleRequest)
	mux.POST("/posts/", h.PostBlog)
	mux.PUT("/posts/:id", h.UpdateBlog)
	mux.DELETE("/posts/:id", h.DeleteBlog)
	return mux
}

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
