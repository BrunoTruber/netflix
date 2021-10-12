/*
  Warnings:

  - You are about to alter the column `data_lancamento` on the `filme` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `filme` MODIFY `data_lancamento` DATETIME(3) NOT NULL;
