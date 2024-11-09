-- Criar o banco de dados 'dripstore'
CREATE DATABASE IF NOT EXISTS dripstore;

-- Usar o banco de dados
USE dripstore;

-- Tabela 'usuarios'
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    complemento VARCHAR(255),
    cep VARCHAR(8) NOT NULL
);

-- Tabela 'categoriaPecas'
CREATE TABLE IF NOT EXISTS categoriaPecas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('Calças', 'Bonés', 'Camisetas', 'Bermudas', 'Fones') NOT NULL
);

-- Tabela 'categoriasFuncaoPeca'
CREATE TABLE IF NOT EXISTS categoriasFuncaoPeca (
    id INT AUTO_INCREMENT PRIMARY KEY,
    funcao ENUM('Esporte', 'Utilitario', 'Corrida', 'Casual') NOT NULL
);

-- Tabela 'produtos'
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subtitle VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    subtitle2 VARCHAR(255),
    price VARCHAR(255) NOT NULL,
    promotion DECIMAL(10, 2),
    base_url VARCHAR(255) NOT NULL,
    cor VARCHAR(255),
    tamanho ENUM('PP', 'P', 'M', 'G', 'GG'),
    genero ENUM('Masculino', 'Feminino', 'Unissex'),
    marca VARCHAR(255),
    categoriaPeca_id INT,
    categoriaFuncaoPeca_id INT,
    FOREIGN KEY (categoriaPeca_id) REFERENCES categoriaPecas(id),
    FOREIGN KEY (categoriaFuncaoPeca_id) REFERENCES categoriasFuncaoPeca(id)
);

-- Tabela 'estoque'
CREATE TABLE IF NOT EXISTS estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    produto_id INT,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Tabela 'pedidos'
CREATE TABLE IF NOT EXISTS pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numeroPedido VARCHAR(255) NOT NULL UNIQUE,
    formapagamento VARCHAR(255) NOT NULL,
    valorpedido DECIMAL(10, 2) NOT NULL,
    status ENUM('Cancelado', 'Finalizado', 'Encaminhado') NOT NULL,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela 'pedidos_produtos'
CREATE TABLE IF NOT EXISTS pedidos_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    produto_id INT,
    quantidade INT,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Inserir dados na tabela 'usuarios'
-- Estes são os dados dos usuários que farão compras no sistema.
INSERT INTO usuarios (nome, cpf, telefone, email, password, endereco, bairro, cidade, complemento, cep) VALUES
('João Silva', '12345678901', '(11) 98765-4321', 'joao.silva@example.com', 'senha123', 'Rua A, 123', 'Centro', 'São Paulo', '', '01001000'),
('Maria Oliveira', '98765432109', '(21) 91234-5678', 'maria.oliveira@example.com', 'senha456', 'Avenida B, 456', 'Jardins', 'Rio de Janeiro', 'Apto 101', '20020000');

-- Inserir dados na tabela 'categoriaPecas'
-- Definindo os tipos de peças (ex.: Calças, Bonés) para serem usados no catálogo de produtos.
INSERT INTO categoriaPecas (tipo) VALUES
('Calças'),
('Bonés'),
('Camisetas'),
('Bermudas'),
('Fones');

-- Inserir dados na tabela 'categoriasFuncaoPeca'
-- Definindo as funções de cada peça, como esporte ou casual.
INSERT INTO categoriasFuncaoPeca (funcao) VALUES
('Esporte'),
('Utilitario'),
('Corrida'),
('Casual');

-- Inserir dados na tabela 'produtos'
-- Adicionando produtos com seus detalhes, como título, descrição, preço e promoções.
INSERT INTO produtos (subtitle, title, subtitle2, price, promotion, base_url, cor, tamanho, genero, marca, categoriaPeca_id, categoriaFuncaoPeca_id) VALUES
('Calça de Treino', 'Calça Esportiva', 'Modelo confortável', '120.00', 99.90, 'https://example.com/calca.jpg', 'Preto', 'M', 'Masculino', 'Nike', 1, 1),
('Boné Casual', 'Boné Estiloso', 'Design casual', '50.00', NULL, 'https://example.com/bone.jpg', 'Azul', NULL, 'Unissex', 'Adidas', 2, 4),
('Camiseta Corrida', 'Camiseta Leve', 'Ideal para corridas', '70.00', 60.00, 'https://example.com/camiseta.jpg', 'Vermelho', 'P', 'Feminino', 'Puma', 3, 3);

-- Inserir dados na tabela 'estoque'
-- Informando o estoque disponível para cada produto.
INSERT INTO estoque (nome, quantidade, produto_id) VALUES
('Calça Esportiva', 50, 1),
('Boné Estiloso', 30, 2),
('Camiseta Leve', 20, 3);

-- Inserir dados na tabela 'pedidos'
-- Registro de pedidos feitos pelos usuários, incluindo forma de pagamento e status do pedido.
INSERT INTO pedidos (numeroPedido, formapagamento, valorpedido, status, usuario_id) VALUES
('PED001', 'Cartão de Crédito', 159.90, 'Finalizado', 1),
('PED002', 'Boleto', 70.00, 'Encaminhado', 2);

-- Inserir dados na tabela 'pedidos_produtos'
-- Relacionando produtos aos pedidos, especificando a quantidade de cada produto.
INSERT INTO pedidos_produtos (pedido_id, produto_id, quantidade) VALUES
(1, 1, 1),
(1, 2, 1),
(2, 3, 1);
