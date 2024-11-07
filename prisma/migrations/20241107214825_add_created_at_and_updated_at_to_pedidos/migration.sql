/*
  Warnings:

  - You are about to drop the column `cliente` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `vendedor` on the `pedidos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[numeroPedido]` on the table `Pedidos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `numeroPedido` to the `Pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cor` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamanho` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pedidos` DROP COLUMN `cliente`,
    DROP COLUMN `deleted`,
    DROP COLUMN `vendedor`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `numeroPedido` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` ENUM('Cancelado', 'Finalizado', 'Encaminhado') NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `categoria` ENUM('Esporte', 'Utilitario', 'Corrida', 'Casual') NOT NULL,
    ADD COLUMN `cor` VARCHAR(191) NOT NULL,
    ADD COLUMN `genero` ENUM('Masculino', 'Feminino', 'Unissex') NOT NULL,
    ADD COLUMN `marca` VARCHAR(191) NOT NULL,
    ADD COLUMN `tamanho` ENUM('PP', 'P', 'M', 'G', 'GG') NOT NULL;

-- CreateTable
CREATE TABLE `PedidosProdutos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido_id` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Pedidos_numeroPedido_key` ON `Pedidos`(`numeroPedido`);

-- AddForeignKey
ALTER TABLE `PedidosProdutos` ADD CONSTRAINT `PedidosProdutos_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `Pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidosProdutos` ADD CONSTRAINT `PedidosProdutos_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
