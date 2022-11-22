package usecase

import (
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/usecase/repo"
	"gorm.io/gorm"
)

// Interactors
// Use Caseインターフェースの実装
// ここのメソッドにControllerから直接アクセスする

type BlogPostUseCase struct {
	repo Repo // db repository
	// presenter BlogPost // presenter
}

// TODO add presenter

func New(db *gorm.DB) *BlogPostUseCase {
	return &BlogPostUseCase{
		repo: repo.New(db),
		// presenter: nil
	}
}

func (uc *BlogPostUseCase) GetOne(id string) (*model.BlogPost, error) {
	data, err := uc.repo.GetOne(id)
	return data, err
}

func (uc *BlogPostUseCase) GetAll() (*[]model.BlogPost, error) {
	data, err := uc.repo.GetAll()
	return data, err
}

func (uc *BlogPostUseCase) Post(post *model.BlogPost) error {
	_, err := uc.repo.Post(post)
	return err
}

func (uc *BlogPostUseCase) Update(id string, newdata *model.BlogPost) error {
	err := uc.repo.Update(id, newdata)
	return err
}

func (uc *BlogPostUseCase) Delete(id string) error {
	err := uc.repo.Delete(id)
	return err
}
