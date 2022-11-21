package handler

import "net/http"

type HttpError struct {
	code    string
	message string
}

func (h HttpError) EmitError(w http.ResponseWriter) {
	http.Error(w, h.code, http.StatusInternalServerError)
	return
}
