package repo

import (
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/rs/zerolog/log"
	"gorm.io/gorm"
)

type GormRepo struct {
	db *gorm.DB
}

func New(db *gorm.DB) *GormRepo {
	return &GormRepo{
		db: db,
	}
}

// GetOne TODO add error handling
func (b GormRepo) GetOne(id string) *model.BlogPost {
	result := &model.BlogPost{}
	b.db.Where("ID = ?", id).First(&result)
	return result
}

func (b GormRepo) GetAll() *[]model.BlogPost {
	result := &[]model.BlogPost{}
	b.db.Find(&result)
	return result
}

func (b GormRepo) Post(data *model.BlogPost) (id uint, err error) {
	result := b.db.Create(&data)
	err = result.Error
	if err != nil {
		log.Error().Msgf("database creation error: %v", err)
		return 0, err
	} else {
		return data.ID, nil
	}
}

func (b GormRepo) Update(id string, datanew *model.BlogPost) {
	data := &model.BlogPost{}
	b.db.Where("ID = ?", id).First(&data)
	b.db.Model(&data).Updates(&datanew)
	return
}

func (b GormRepo) Delete(id string) {
	b.db.Delete(&model.BlogPost{}, id)
	return
}
