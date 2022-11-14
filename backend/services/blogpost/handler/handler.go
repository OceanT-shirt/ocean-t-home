package handler

import "gorm.io/gorm"

type Handler struct {
	gormdb *gorm.DB
}

func New(db *gorm.DB) (h *Handler) {
	h = &Handler{
		gormdb: db,
	}
	return
}
