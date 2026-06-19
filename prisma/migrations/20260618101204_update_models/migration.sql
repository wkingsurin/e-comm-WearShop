/*
  Warnings:

  - You are about to drop the column `variantId` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Variant` table. All the data in the column will be lost.
  - Added the required column `colorId` to the `ProductImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorId` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductImage" DROP CONSTRAINT "ProductImage_variantId_fkey";

-- DropIndex
DROP INDEX "Variant_color_idx";

-- AlterTable
ALTER TABLE "ProductImage" DROP COLUMN "variantId",
ADD COLUMN     "colorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "color",
ADD COLUMN     "colorId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ProductColor" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "ProductColor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProductColor_productId_idx" ON "ProductColor"("productId");

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "ProductColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "ProductColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductColor" ADD CONSTRAINT "ProductColor_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
