package handler

import (
	"encoding/json"
	"fmt"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/julienschmidt/httprouter"
	"github.com/rs/zerolog/log"
	"gorm.io/gorm"
	"net/http"
)

type Handler struct {
	gormdb *gorm.DB
}

func New(db *gorm.DB) (h *Handler) {
	h = &Handler{
		gormdb: db,
	}
	return
}

// Hello これはハンドラの例
func (h Handler) Hello(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	if _, err := fmt.Fprintln(w, "Hello, World!"); err != nil {
		http.Error(w, fmt.Sprintf("%s", err), http.StatusInternalServerError)
	}
}

func (h Handler) getAllBlog(w http.ResponseWriter, _ *http.Request, p httprouter.Params) (err error) {
	data := model.GetAll(h.gormdb)
	output, err := json.MarshalIndent(data, "", "\t\t")
	if err != nil {
		log.Error().Msgf("Get Blog Error: %v", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(output)
	return
}

func (h Handler) getOneBlog(w http.ResponseWriter, _ *http.Request, p httprouter.Params) (err error) {
	data := model.GetOne(h.gormdb, p.ByName("id")[1:])
	output, err := json.MarshalIndent(data, "", "\t\t")
	if err != nil {
		log.Error().Msgf("Get Blog Error: %v", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(output)

	return
}

func (h Handler) PostBlog(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	//l := r.ContentLength
	//body := make([]byte, l)
	//if _, err := r.Body.Read(body); err != nil {
	//	log.Error().Msgf("body making error: &v", err)
	//	return
	//}
	var data model.BlogPost
	//if err := json.Unmarshal(body, &data); err != nil {
	//	log.Error().Msgf("json parsing error: &v", err)
	//	return
	//}
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		log.Error().Msgf("json parsing error: &v", err)
		return
	}
	id, err := model.Post(h.gormdb, &data)
	if err != nil {
		log.Error().Msgf("database post error: &v", err)
		return
	} else {
		log.Info().Msgf("blogpost created: %v", id)
	}
	w.WriteHeader(200)
	return
}
