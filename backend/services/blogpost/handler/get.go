package handler

import (
	"encoding/json"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/julienschmidt/httprouter"
	"github.com/rs/zerolog/log"
	"net/http"
)

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
	data := model.GetOne(h.gormdb, p.ByName("id"))
	output, err := json.MarshalIndent(data, "", "\t\t")
	if err != nil {
		log.Error().Msgf("Get Blog Error: %v", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(output)

	return
}
