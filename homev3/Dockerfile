# ビルドステージ
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn run build

# 実行ステージ
FROM node:18-alpine

WORKDIR /app

EXPOSE 3000

COPY --from=build /app/build /app/build

CMD ["yarn", "run", "vite"]
