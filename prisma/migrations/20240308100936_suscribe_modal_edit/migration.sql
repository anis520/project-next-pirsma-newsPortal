/*
  Warnings:

  - Added the required column `amount` to the `subscribers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tran_id` to the `subscribers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `subscribers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subscribers` ADD COLUMN `amount` VARCHAR(50) NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `tran_id` VARCHAR(100) NOT NULL,
    ADD COLUMN `type` VARCHAR(500) NOT NULL;
