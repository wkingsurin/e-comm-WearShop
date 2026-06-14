/*
  Warnings:

  - You are about to drop the column `deliveryMethon` on the `Order` table. All the data in the column will be lost.
  - Added the required column `deliveryMethod` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `paymentMethod` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CARD', 'CASH', 'PAYPAL');

-- CreateEnum
CREATE TYPE "DeliveryMethod" AS ENUM ('COURIER', 'PICKUP', 'POST');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "deliveryMethon",
ADD COLUMN     "deliveryMethod" "DeliveryMethod" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus" NOT NULL,
DROP COLUMN "paymentMethod",
ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "productId" DROP NOT NULL,
ALTER COLUMN "variantId" DROP NOT NULL;
