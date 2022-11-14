package handler

import (
	"fmt"
	"net/http"
)

// Hello これはハンドラの例
func (h Handler) Hello(w http.ResponseWriter, r *http.Request) {
	if _, err := fmt.Fprintln(w, "Hello, World!"); err != nil {
		http.Error(w, fmt.Sprintf("%s", err), http.StatusInternalServerError)
	}
}
