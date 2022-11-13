CREATE TABLE "blogpost" (
  "id" int PRIMARY KEY,
  "title" varchar NOT NULL,
  "created_at" datetime,
  "last_edited_at" datetime,
  "contents" varchar
);
