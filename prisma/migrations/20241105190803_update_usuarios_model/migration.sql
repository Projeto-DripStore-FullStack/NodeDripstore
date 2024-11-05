-- CreateTable
CREATE TABLE `Produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subtitle` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subtitle2` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `promotion` DECIMAL(65, 30) NOT NULL,
    `base_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `cep` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estoque` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vendedor` VARCHAR(191) NOT NULL,
    `cliente` VARCHAR(191) NOT NULL,
    `formapagamento` VARCHAR(191) NOT NULL,
    `valorpedido` DECIMAL(65, 30) NOT NULL,
    `deleted` BOOLEAN NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProdutoCategoria` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProdutoCategoria_AB_unique`(`A`, `B`),
    INDEX `_ProdutoCategoria_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Estoque` ADD CONSTRAINT `Estoque_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProdutoCategoria` ADD CONSTRAINT `_ProdutoCategoria_A_fkey` FOREIGN KEY (`A`) REFERENCES `Categoria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProdutoCategoria` ADD CONSTRAINT `_ProdutoCategoria_B_fkey` FOREIGN KEY (`B`) REFERENCES `Produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
