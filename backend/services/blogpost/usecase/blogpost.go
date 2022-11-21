package usecase

// Interactors
// Use Caseインターフェースの実装

import (
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"gorm.io/gorm"
)

type BlogPostUseCase struct {
	db       *gorm.DB
	blogpost BlogPost
}

func New(db *gorm.DB) *BlogPostUseCase {
	return &BlogPostUseCase{
		db:       db,
		blogpost: nil,
	}
}

func (uc *BlogPostUseCase) GetOne(id string) (model.BlogPost, error) {
	return model.BlogPost{}, nil
}

func (uc *BlogPostUseCase) GetAll() ([]model.BlogPost, error) {
	return nil, nil
}

func (uc *BlogPostUseCase) Post(post model.BlogPost) error {
	return nil
}

func (uc *BlogPostUseCase) Update(id string, newdata model.BlogPost) error {
	return nil
}

func (uc *BlogPostUseCase) Delete(id string) error {
	return nil
}
