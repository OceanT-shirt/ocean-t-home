package model

import "time"

type BlogPost struct {
	Title        string
	CreatedAt    time.Time
	LastEditedAt time.Time
	Contents     string
}
