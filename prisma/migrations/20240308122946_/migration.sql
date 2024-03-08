/*
  Warnings:

  - A unique constraint covering the columns `[tran_id]` on the table `subscribers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `subscribers_tran_id_key` ON `subscribers`(`tran_id`);
