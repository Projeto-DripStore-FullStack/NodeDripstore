-- Criar o banco de dados 'dripstore'
CREATE DATABASE IF NOT EXISTS dripstore;

-- Usar o banco de dados
USE dripstore;
-- Tabela 'usuarios'
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL,
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
    tipo VARCHAR(255) NOT NULL
);

-- Tabela 'categoriasFuncaoPeca'
CREATE TABLE IF NOT EXISTS categoriasFuncaoPeca (
    id INT AUTO_INCREMENT PRIMARY KEY,
    funcao VARCHAR(255) NOT NULL
);

-- Tabela 'produtos'
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subtitle VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    subtitle2 VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    promotion DECIMAL(10,2),
    base_url VARCHAR(255),
    cor VARCHAR(50),
    tamanho VARCHAR(10),
    genero VARCHAR(50),
    estado ENUM('Novo', 'Seminovo') NOT NULL, -- Adiciona a coluna 'estado' como ENUM para tipos específicos
    marca VARCHAR(100),
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
    numeroPedido VARCHAR(50) NOT NULL,
    formapagamento VARCHAR(50) NOT NULL,
    valorpedido DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    usuario_id INT,
    nomeCartao VARCHAR(255) NOT NULL,
    validadeCartao VARCHAR(5) NOT NULL,
    cvvCartao VARCHAR(3) NOT NULL,
    numeroCartao VARCHAR(16) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabela 'pedidos_produtos'
CREATE TABLE IF NOT EXISTS pedidos_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    produto_id INT,
    quantidade INT NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Inserir dados na tabela 'usuarios'
INSERT INTO usuarios (nome, cpf, telefone, email, password, endereco, bairro, cidade, complemento, cep) VALUES
('João Silva', '12345678901', '(11) 98765-4321', 'joao.silva@example.com', 'senha123', 'Rua A, 123', 'Centro', 'São Paulo', '', '01001000'),
('Maria Oliveira', '98765432109', '(21) 91234-5678', 'maria.oliveira@example.com', 'senha456', 'Avenida B, 456', 'Jardins', 'Rio de Janeiro', 'Apto 101', '20020000'),
('Carlos Souza', '11223344556', '(41) 99887-6543', 'carlos.souza@example.com', 'senha789', 'Rua C, 789', 'Centro', 'Curitiba', 'Sala 301', '80030000'),
('Ana Costa', '22334455667', '(61) 91910-1111', 'ana.costa@example.com', 'senha101', 'Avenida D, 101', 'Bairro A', 'Brasília', '', '70070000');

-- Inserir dados na tabela 'categoriaPecas'
INSERT INTO categoriaPecas (tipo) VALUES
('Calças'),
('Bonés'),
('Camisetas'),
('Tênis'),
('Headphones');

-- Inserir dados na tabela 'categoriasFuncaoPeca'
INSERT INTO categoriasFuncaoPeca (funcao) VALUES
('Esporte'),
('Utilitario'),
('Corrida'),
('Casual'),
('Moda');

-- Inserir dados na tabela 'produtos'
INSERT INTO produtos (id, subtitle, title, subtitle2, price, promotion, base_url, cor, tamanho, genero, estado, marca, categoriaPeca_id, categoriaFuncaoPeca_id) VALUES
(1, 'Calça de Treino', 'Calça Esportiva', 'Modelo confortável', 120.00, 10.00, 'https://example.com/calca.jpg', 'Preto', 'M', 'Masculino', 'Novo', 'Nike', 1, 1),
(2, 'Boné Casual', 'Boné Estiloso', 'Design casual', 50.00, NULL, 'https://example.com/bone.jpg', 'Azul', NULL, 'Unissex', 'Seminovo', 'Adidas', 2, 4),
(3, 'Camiseta Corrida', 'Camiseta Leve', 'Ideal para corridas', 70.00, 60.00, 'https://example.com/camiseta.jpg', 'Vermelho', 'P', 'Feminino', 'Novo', 'Puma', 3, 3),
(4, 'Tênis Confortável', 'Tênis Corrida', 'Confortável para maratonar', 45.00, NULL, 'https://example.com/tenis.jpg', 'Amarelo', '42', 'Masculino', 'Seminovo', 'Quiksilver', 4, 4),
(5, 'Fone Bluetooth', 'Fone Sem Fio', 'Som de alta qualidade', 150.00, NULL, 'https://example.com/fone.jpg', 'Preto', NULL, 'Unissex', 'Novo', 'Sony', 5, 5);

-- Inserir dados na tabela 'estoque'
INSERT INTO estoque (nome, quantidade, produto_id) VALUES
('Calça Esportiva', 50, 1),
('Boné Estiloso', 30, 2),
('Camiseta Leve', 20, 3),
('Tênis Corrida', 25, 4),
('Fone Sem Fio', 15, 5);

-- Inserir dados na tabela 'pedidos'
INSERT INTO pedidos (id, numeroPedido, formapagamento, valorpedido, status, usuario_id, nomeCartao, validadeCartao, cvvCartao, numeroCartao) VALUES
(1,'PED001', 'Credito', 219.00, 'Encaminhado', 1, 'João da Silva', '12/25', '123', '1234567812345678'),
(2,'PED002', 'Debito', 150.00, 'Finalizado', 2, 'Maria Oliveira', '11/24', '456', '8765432187654321'),
(3,'PED003', 'Boleto', 200.00, 'Cancelado', 3, 'Carlos Souza', '10/23', '789', '2345678923456789'),
(4,'PED004', 'Credito', 320.00, 'Finalizado', 4, 'Ana Costa', '01/26', '321', '3456789034567890');

-- Inserir dados na tabela 'pedidos_produtos'
INSERT INTO pedidos_produtos (pedido_id, produto_id, quantidade) VALUES
(1, 1, 1),
(1, 2, 1),
(2, 3, 1),
(3, 4, 2),
(4, 5, 1);

SELECT * FROM usuarios;
SELECT * FROM categoriaPecas;
SELECT * FROM categoriasFuncaoPeca;
SELECT * FROM produtos;
SELECT * FROM estoque;
SELECT * FROM pedidos;
SELECT * FROM pedidos_produtos;

-- Desabilitar as verificações de chave estrangeira
SET foreign_key_checks = 0;

-- Dropar as tabelas existentes
DROP TABLE IF EXISTS pedidos_produtos;
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS estoque;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS categoriaPecas;
DROP TABLE IF EXISTS categoriasFuncaoPeca;
DROP TABLE IF EXISTS usuarios;

-- Reabilitar as verificações de chave estrangeira
SET foreign_key_checks = 1;
