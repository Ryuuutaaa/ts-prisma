/*
  Warnings:

  - Added the required column `img` to the `Produc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produc` ADD COLUMN `img` VARCHAR(191) NOT NULL;
