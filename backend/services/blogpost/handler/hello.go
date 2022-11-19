package handler

import (
	"fmt"
	"github.com/julienschmidt/httprouter"
	"net/http"
)

// Hello これはハンドラの例
func (h Handler) Hello(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	if _, err := fmt.Fprintln(w, "Hello, World!"); err != nil {
		http.Error(w, fmt.Sprintf("%s", err), http.StatusInternalServerError)
	}
}
