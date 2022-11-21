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

func (b GormRepo) GetOne(id string) (*model.BlogPost, error) {
	result := &model.BlogPost{}
	if err := b.db.Where("ID = ?", id).First(&result).Error; err != nil {
		return nil, err
	}
	return result, nil
}

func (b GormRepo) GetAll() (*[]model.BlogPost, error) {
	result := &[]model.BlogPost{}
	if err := b.db.Find(&result).Error; err != nil {
		return nil, err
	}
	return result, nil
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

func (b GormRepo) Update(id string, datanew *model.BlogPost) error {
	data := &model.BlogPost{}
	if err := b.db.Where("ID = ?", id).First(&data).Error; err != nil {
		return err
	}
	if err := b.db.Model(&data).Updates(&datanew).Error; err != nil {
		return err
	}
	return nil
}

func (b GormRepo) Delete(id string) error {
	if err := b.db.Delete(&model.BlogPost{}, id).Error; err != nil {
		return err
	}
	return nil
}
