package handler

// Controller

import (
	"encoding/json"
	"fmt"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/usecase"
	"github.com/julienschmidt/httprouter"
	"github.com/rs/zerolog/log"
	"gorm.io/gorm"
	"net/http"
)

type Handler struct {
	uc *usecase.BlogPostUseCase
}

func New(db *gorm.DB) *Handler {
	h := &Handler{
		uc: usecase.New(db),
	}
	return h
}

// Hello これはハンドラの例
func (h Handler) hello(w http.ResponseWriter, _ *http.Request, _ httprouter.Params) {
	if _, err := fmt.Fprintln(w, "Hello, World!"); err != nil {
		NewHttpError(w, err)
	}
}

func (h Handler) getAllBlog(w http.ResponseWriter, _ *http.Request, _ httprouter.Params) {
	data, err := h.uc.GetAll()
	output, err := json.MarshalIndent(data, "", "\t\t")
	if err != nil {
		NewHttpError(w, err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(output)
	return
}

func (h Handler) getOneBlog(w http.ResponseWriter, _ *http.Request, p httprouter.Params) {
	data, err := h.uc.GetOne(p.ByName("id"))
	output, err := json.MarshalIndent(data, "", "\t\t")
	if err != nil {
		NewHttpError(w, err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(output)

	return
}

func (h Handler) postBlog(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	var data *model.BlogPost
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		log.Error().Msgf("json parsing error: &v", err)
		return
	}
	err := h.uc.Post(data)
	if err != nil {
		log.Error().Msgf("database post error: &v", err)
		NewHttpError(w, err)
		return
	} else {
		w.WriteHeader(200)
	}
	return
}

func (h Handler) updateBlog(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	id := p.ByName("id")
	var data *model.BlogPost
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		log.Error().Msgf("json parsing error: &v", err)
		NewHttpError(w, err)
		return
	}
	if err := h.uc.Update(id, data); err != nil {
		NewHttpError(w, err)
	} else {
		w.WriteHeader(200)
	}
	return
}

func (h Handler) deleteBlog(w http.ResponseWriter, _ *http.Request, p httprouter.Params) {
	id := p.ByName("id")
	if err := h.uc.Delete(id); err != nil {
		NewHttpError(w, err)
	} else {
		w.WriteHeader(200)
	}
	return
}
