package repo

import "github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"

type IGormRepo interface {
	GetOne(id string) *model.BlogPost
	GetAll() *[]model.BlogPost
	Post(data *model.BlogPost) (id uint, err error)
	Update(id string, datanew *model.BlogPost)
	Delete(id string)
}
