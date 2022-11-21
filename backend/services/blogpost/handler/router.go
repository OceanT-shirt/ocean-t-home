package handler

import (
	"github.com/julienschmidt/httprouter"
	"gorm.io/gorm"
)

func NewRouter(db *gorm.DB) *httprouter.Router {
	h := New(db)

	mux := httprouter.New()

	mux.GET("/", h.hello)
	mux.GET("/posts/", h.getAllBlog)
	mux.GET("/posts/:id", h.getOneBlog)
	mux.POST("/posts/", h.postBlog)
	mux.PUT("/posts/:id", h.updateBlog)
	mux.DELETE("/posts/:id", h.deleteBlog)

	return mux
}
