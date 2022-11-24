package handler

import (
	"context"
	jwtmiddleware "github.com/auth0/go-jwt-middleware/v2"
	"github.com/auth0/go-jwt-middleware/v2/jwks"
	"github.com/auth0/go-jwt-middleware/v2/validator"
	"github.com/julienschmidt/httprouter"
	"github.com/rs/zerolog/log"
	"net/http"
	"net/url"
	"os"
	"time"
)

// CustomClaims contains custom data we want from the token.
type CustomClaims struct {
	Scope string `json:"scope"`
}

// Validate does nothing for this example, but we need
// it to satisfy validator.CustomClaims interface.
func (c CustomClaims) Validate(ctx context.Context) error {
	return nil
}

func Auth(h httprouter.Handle) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
		// read auth data from the http header
		tokenString, err := jwtmiddleware.AuthHeaderTokenExtractor(r)
		if err != nil {
			log.Error().Msgf("%v", err)
			NewHttpError(w, err)
			return
		} else {
			log.Debug().Msgf("token received: %v", tokenString)
		}

		// get url of secret key provider
		issuerURL, err := url.Parse("https://" + os.Getenv("AUTH0_DOMAIN") + "/")
		if err != nil {
			log.Fatal().Msgf("Failed to parse the issuer url: %v", err)
		} else {
			log.Debug().Msgf("url: %v", issuerURL)
		}
		provider := jwks.NewCachingProvider(issuerURL, 5*time.Minute)

		jwtValidator, err := validator.New(
			provider.KeyFunc,
			validator.RS256,
			issuerURL.String(),
			[]string{os.Getenv("AUTH0_AUDIENCE")},
			validator.WithCustomClaims(
				func() validator.CustomClaims {
					return &CustomClaims{}
				},
			),
			validator.WithAllowedClockSkew(time.Minute),
		)
		if err != nil {
			log.Fatal().Msgf("Failed to set up the jwt validator")
		}

		if tokenClaims, err := jwtValidator.ValidateToken(context.Background(), tokenString); err != nil {
			log.Error().Msgf("%v", err)
			return
		} else {
			log.Debug().Msgf("(%%#v) %#v", tokenClaims)
		}

		h(w, r, p)
	}
}
