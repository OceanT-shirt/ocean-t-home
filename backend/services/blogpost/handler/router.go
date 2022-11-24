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
	mux.POST("/protected/posts/", Auth(h.postBlog))
	mux.PUT("/protected/posts/:id", Auth(h.updateBlog))
	mux.DELETE("/protected/posts/:id", Auth(h.deleteBlog))
	mux.GET("/protected/", Auth(h.getAllBlog))

	return mux
}
