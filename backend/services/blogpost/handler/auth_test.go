package handler

import (
	"github.com/joho/godotenv"
	"github.com/julienschmidt/httprouter"
	"github.com/rs/zerolog/log"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

// TODO ガバガバテストの解消（ケースの追加）
func TestAuth(t *testing.T) {
	if err := godotenv.Load("../env/.env"); err != nil {
		log.Error().Msgf("%v", err)
	}
	r := httptest.NewRequest(http.MethodGet, "/protected", nil)
	r.Header.Set("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImN4ekVmR3dCOWc4WDVpMGV3cmItRCJ9.eyJpc3MiOiJodHRwczovL29jZWFuLXQtaG9tZS5qcC5hdXRoMC5jb20vIiwic3ViIjoiazluWGxoa2l0V0ozSnJsbjhQOWN0RmdxVEJMOHhqRTFAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9ibG9ncG9zdGFwaSIsImlhdCI6MTY2OTIwNzgzMiwiZXhwIjoxNjY5Mjk0MjMyLCJhenAiOiJrOW5YbGhraXRXSjNKcmxuOFA5Y3RGZ3FUQkw4eGpFMSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.o4hzEFLpPO0Y_VAc4nWSuBQRA1FSWfmIgbxMuTVT9XqI11ev6F7hOLhJb-qnMxmQIQPWD5JwozknXJaLmY4F9k4odF1ugfwAYLC0n2HcsE92LgpqGnVyTzTN76yun7x8atRcniVaAf9gFmACCclpFIR2HjZiyc9A_FNZna8h2dYcFvhzynasABTAAYjyA824MjgW0ARBpFwmC13v9Qk5W1vb1Nel5XxP1WkzAN12ZT436FyC8UgBUeMN-GBLDgR2hVtscU89mTvO1M5POroH7sFjPcwOPxGTvgqfvswIHxyIh_h_TCV5w88donEfSmkfr10JqcIFdygIfDWFSCtfqw")
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
