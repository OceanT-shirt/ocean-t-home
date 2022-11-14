package db

import "gorm.io/gorm"

type GormInterface struct {
	dbgorm *gorm.DB
}
