local:
	docker start blog-local-postgres
	DSN_POSTGRES="host=localhost user=postgres password=secret dbname=blogpost port=5432 sslmode=disable" PORT=8081 go run main.go