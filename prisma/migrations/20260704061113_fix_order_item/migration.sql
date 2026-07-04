/*
  Warnings:

  - Made the column `productId` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `variantId` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "productId" SET NOT NULL,
ALTER COLUMN "variantId" SET NOT NULL;
