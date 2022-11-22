package handler

import (
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/usecase"
	"github.com/OceanT-shirt/ocean-t-home/services/blogpost/usecase/mock_repo"
	"github.com/golang/mock/gomock"
	"github.com/julienschmidt/httprouter"
	"gorm.io/gorm"
	"net/http"
	"net/http/httptest"
	"reflect"
	"testing"
)

func getMockUseCase(t *testing.T) *usecase.BlogPostUseCase {
	mockCtrl := gomock.NewController(t)
	defer mockCtrl.Finish()
	mr := mock_repo.NewMockRepo(mockCtrl)
	uc := usecase.NewMock(mr)
	return uc
}

func TestHandler_deleteBlog(t *testing.T) {
	type fields struct {
		uc *usecase.BlogPostUseCase
	}
	type args struct {
		w   http.ResponseWriter
		in1 *http.Request
		p   httprouter.Params
	}

	uc := getMockUseCase(t)
	req := httptest.NewRequest("delete", "/post/1", nil)
	req.Header.Set("Content-Type", "application/json")
	rr := httptest.NewRecorder()

	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		{
			name: "success",
			fields: fields{
				uc,
			},
			args: args{
				w:   rr,
				in1: req,
				p: httprouter.Params{
					{
						"id",
						"1",
					},
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			h := Handler{
				uc: tt.fields.uc,
			}
			h.deleteBlog(tt.args.w, tt.args.in1, tt.args.p)
		})
	}
}

func TestHandler_getAllBlog(t *testing.T) {
	type fields struct {
		uc *usecase.BlogPostUseCase
	}
	type args struct {
		w   http.ResponseWriter
		in1 *http.Request
		in2 httprouter.Params
	}
	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			h := Handler{
				uc: tt.fields.uc,
			}
			h.getAllBlog(tt.args.w, tt.args.in1, tt.args.in2)
		})
	}
}

func TestHandler_getOneBlog(t *testing.T) {
	type fields struct {
		uc *usecase.BlogPostUseCase
	}
	type args struct {
		w   http.ResponseWriter
		in1 *http.Request
		p   httprouter.Params
	}
	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			h := Handler{
				uc: tt.fields.uc,
			}
			h.getOneBlog(tt.args.w, tt.args.in1, tt.args.p)
		})
	}
}

func TestHandler_hello(t *testing.T) {
	type fields struct {
		uc *usecase.BlogPostUseCase
	}
	type args struct {
		w   http.ResponseWriter
		in1 *http.Request
		in2 httprouter.Params
	}
	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			h := Handler{
				uc: tt.fields.uc,
			}
			h.hello(tt.args.w, tt.args.in1, tt.args.in2)
		})
	}
}

func TestHandler_postBlog(t *testing.T) {
	type fields struct {
		uc *usecase.BlogPostUseCase
	}
	type args struct {
		w   http.ResponseWriter
		r   *http.Request
		in2 httprouter.Params
	}
	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			h := Handler{
				uc: tt.fields.uc,
			}
			h.postBlog(tt.args.w, tt.args.r, tt.args.in2)
		})
	}
}

func TestHandler_updateBlog(t *testing.T) {
	type fields struct {
		uc *usecase.BlogPostUseCase
	}
	type args struct {
		w http.ResponseWriter
		r *http.Request
		p httprouter.Params
	}
	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			h := Handler{
				uc: tt.fields.uc,
			}
			h.updateBlog(tt.args.w, tt.args.r, tt.args.p)
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
		want *Handler
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
