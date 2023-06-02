-- CreateEnum
CREATE TYPE "IntentStatus" AS ENUM ('pending', 'confirmed', 'canceled');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "status" "IntentStatus" NOT NULL DEFAULT 'pending';
