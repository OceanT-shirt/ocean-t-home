package usecase

import "github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"

// Use Case
// handler (Controller) から受け取った入力を受け取り、Application Business Logicに従って
// model (Domain層) を呼び出す

type (
	//BlogPostInteractor interface {
	//	GetOne(id string) (model.BlogPost, error)
	//	GetAll() ([]model.BlogPost, error)
	//	Post(post model.BlogPost) error
	//	Update(id string, newdata model.BlogPost) error
	//	Delete(id string) error
	//}
	GormRepo interface {
		GetOne(id string) (*model.BlogPost, error)
		GetAll() (*[]model.BlogPost, error)
		Post(data *model.BlogPost) (uint, error)
		Update(id string, datanew *model.BlogPost) error
		Delete(id string) error
	}
)
