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

    UNIQUE INDEX `Usuarios_cpf_key`(`cpf`),
    UNIQUE INDEX `Usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriaPecas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CategoriaPecas_tipo_key`(`tipo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriasFuncaoPeca` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funcao` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CategoriasFuncaoPeca_funcao_key`(`funcao`),
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
CREATE TABLE `Produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subtitle` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subtitle2` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `promotion` DECIMAL(65, 30) NULL,
    `base_url` VARCHAR(191) NOT NULL,
    `cor` VARCHAR(191) NOT NULL,
    `tamanho` ENUM('PP', 'P', 'M', 'G', 'GG') NULL,
    `genero` ENUM('Masculino', 'Feminino', 'Unissex') NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `categoriaPeca_id` INTEGER NOT NULL,
    `categoriaFuncaoPeca_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroPedido` VARCHAR(191) NOT NULL,
    `formapagamento` VARCHAR(191) NOT NULL,
    `valorpedido` DOUBLE NOT NULL,
    `status` ENUM('Cancelado', 'Finalizado', 'Encaminhado') NOT NULL DEFAULT 'Encaminhado',
    `usuario_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pedidos_numeroPedido_key`(`numeroPedido`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PedidosProdutos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido_id` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Estoque` ADD CONSTRAINT `Estoque_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_categoriaPeca_id_fkey` FOREIGN KEY (`categoriaPeca_id`) REFERENCES `CategoriaPecas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_categoriaFuncaoPeca_id_fkey` FOREIGN KEY (`categoriaFuncaoPeca_id`) REFERENCES `CategoriasFuncaoPeca`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidosProdutos` ADD CONSTRAINT `PedidosProdutos_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `Pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidosProdutos` ADD CONSTRAINT `PedidosProdutos_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
