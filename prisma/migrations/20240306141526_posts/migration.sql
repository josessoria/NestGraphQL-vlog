-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "Title" VARCHAR(30) NOT NULL,
    "Content" VARCHAR(30),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);
