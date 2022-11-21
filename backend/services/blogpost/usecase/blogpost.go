package usecase

// Interactors
// Use Caseインターフェースの実装

import (
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/usecase/repo"
	"gorm.io/gorm"
)

type BlogPostUseCase struct {
	repo        *repo.GormRepo // db repository
	presenter BlogPost // presenter
}

type BlogPostInteractor interface {
	GetOne(id string) (model.BlogPost, error)
	GetAll() ([]model.BlogPost, error)
	Post(post model.BlogPost) error
	Update(id string, newdata model.BlogPost) error
	Delete(id string) error
}

func New(db *gorm.DB) *BlogPostUseCase {
	return &BlogPostUseCase{
		repo:        repo.New(db),
		presenter: nil
	}
}

func (uc *BlogPostUseCase) GetOne(id string) (*model.BlogPost, error) {
	data, err := uc.
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
