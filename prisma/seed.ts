import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

import { seedBrands } from "./seeds/brands.seed";
import { seedCategories } from "./seeds/categories.seed";
import { seedProducts } from "./seeds/products.seed";
import seedColors from "./seeds/colors.seed";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DIRECT_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function clearDatabase() {
  await prisma.favorite.deleteMany();
  await prisma.cartItem.deleteMany();

  await prisma.productImage.deleteMany();

  await prisma.variant.deleteMany();

  await prisma.productColor.deleteMany();

  await prisma.product.deleteMany();

  await prisma.brand.deleteMany();

  await prisma.category.deleteMany();
}

export async function main() {
  await clearDatabase();

  await seedBrands();

  await seedCategories();

  await seedProducts();

  await seedColors();

  console.log(`Seed completed...`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
