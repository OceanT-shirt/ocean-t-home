package handler

import "github.com/julienschmidt/httprouter"

func NewRouter() *httprouter.Router {
	mux := httprouter.New()

	return mux
}
