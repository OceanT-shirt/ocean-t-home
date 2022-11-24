FROM golang:1.19-alpine AS builder
WORKDIR /tmp/build-app

RUN apk add git
COPY . .

RUN go mod tidy
RUN go build -o app .

FROM alpine:latest

WORKDIR /app/

COPY --from=builder /tmp/build-app/app ./

CMD ["./app"]