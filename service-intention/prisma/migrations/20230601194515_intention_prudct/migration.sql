/*
  Warnings:

  - The `status` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "IntentionStatus" AS ENUM ('pending', 'confirmed', 'canceled');

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_userId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "status",
ADD COLUMN     "status" "IntentionStatus" NOT NULL DEFAULT 'pending';

-- DropTable
DROP TABLE "products";

-- DropEnum
DROP TYPE "IntentStatus";

-- CreateTable
CREATE TABLE "intention_products" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "intention_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "intention_products" ADD CONSTRAINT "intention_products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
