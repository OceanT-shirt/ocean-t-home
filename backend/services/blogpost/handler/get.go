package handler

import (
	"encoding/json"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"net/http"
)

func (h Handler) getAllBlog(writer http.ResponseWriter, request *http.Request) {

}

func (h Handler) getOneBlog(w http.ResponseWriter, r *http.Request) (err error) {
	data := model.GetOne(h.gormdb)
	output, err := json.MarshalIndent(data, "", "\t\t")
	if err != nil {
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(output)

	return
}
