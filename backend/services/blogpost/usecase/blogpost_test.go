package usecase

import (
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/model"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/usecase/mock_repo"
	"github.com/golang/mock/gomock"
	"gorm.io/gorm"
	"reflect"
	"testing"
)

func getMockRepo(t *testing.T) *mock_repo.MockRepo {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()
	mr := mock_repo.NewMockRepo(ctrl)
	return mr
}

func TestBlogPostUseCase_Delete(t *testing.T) {
	type fields struct {
		repo Repo
	}
	type args struct {
		id string
	}

	tests := []struct {
		name          string
		fields        fields
		args          args
		wantErr       bool
		prepareMockFn func(m *mock_repo.MockRepo)
	}{
		{
			name:   "success",
			fields: fields{},
			args: args{
				id: "1",
			},
			wantErr: false,
			prepareMockFn: func(m *mock_repo.MockRepo) {
				m.EXPECT().Delete("1").Return(nil)
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			mockr := getMockRepo(t)
			uc := &BlogPostUseCase{
				repo: mockr,
			}
			tt.prepareMockFn(mockr)
			if err := uc.Delete(tt.args.id); (err != nil) != tt.wantErr {
				t.Errorf("Delete() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestBlogPostUseCase_GetAll(t *testing.T) {
	type fields struct {
		repo Repo
	}
	tests := []struct {
		name    string
		fields  fields
		want    *[]model.BlogPost
		wantErr bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			uc := &BlogPostUseCase{
				repo: tt.fields.repo,
			}
			got, err := uc.GetAll()
			if (err != nil) != tt.wantErr {
				t.Errorf("GetAll() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("GetAll() got = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestBlogPostUseCase_GetOne(t *testing.T) {
	type fields struct {
		repo Repo
	}
	type args struct {
		id string
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		want    *model.BlogPost
		wantErr bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			uc := &BlogPostUseCase{
				repo: tt.fields.repo,
			}
			got, err := uc.GetOne(tt.args.id)
			if (err != nil) != tt.wantErr {
				t.Errorf("GetOne() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("GetOne() got = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestBlogPostUseCase_Post(t *testing.T) {
	type fields struct {
		repo Repo
	}
	type args struct {
		post *model.BlogPost
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		wantErr bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			uc := &BlogPostUseCase{
				repo: tt.fields.repo,
			}
			if err := uc.Post(tt.args.post); (err != nil) != tt.wantErr {
				t.Errorf("Post() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestBlogPostUseCase_Update(t *testing.T) {
	type fields struct {
		repo Repo
	}
	type args struct {
		id      string
		newdata *model.BlogPost
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		wantErr bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			uc := &BlogPostUseCase{
				repo: tt.fields.repo,
			}
			if err := uc.Update(tt.args.id, tt.args.newdata); (err != nil) != tt.wantErr {
				t.Errorf("Update() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestNew(t *testing.T) {
	type args struct {
		db *gorm.DB
	}
	tests := []struct {
		name string
		args args
		want *BlogPostUseCase
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := New(tt.args.db); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("New() = %v, want %v", got, tt.want)
			}
		})
	}
}
