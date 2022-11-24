package handler

import (
	"github.com/joho/godotenv"
	"github.com/julienschmidt/httprouter"
	"github.com/rs/zerolog/log"
	"io"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"
)

// TODO ガバガバテストの解消（ケースの追加）
func TestAuth(t *testing.T) {
	if err := godotenv.Load("../env/.local.env"); err != nil {
		log.Error().Msgf("%v", err)
	}
	r := httptest.NewRequest(http.MethodGet, "/protected", nil)
	sampleToken := os.Getenv("SAMPLE_TOKEN")
	r.Header.Set("Authorization", "Bearer "+sampleToken)
	w := httptest.NewRecorder()
	Auth(func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
		w.WriteHeader(200)
		if _, err := io.WriteString(w, "success"); err != nil {
			log.Error().Msgf("response writer error: %v", err)
		}

	})(w, r, nil)

	var j map[string]string

	log.Debug().Msgf("%v", string(w.Body.Bytes()))

	if string(w.Body.Bytes()) != "success" {
		t.Error("Incorrect Response")
		return
	}

	t.Logf("%v", j)
}
