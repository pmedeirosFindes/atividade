/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Funcionario" ALTER COLUMN "cargo" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_login_key" ON "Usuario"("login");
