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
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    complemento VARCHAR(255),
    cep VARCHAR(8) NOT NULL
);

-- Tabela 'estoque'
CREATE TABLE IF NOT EXISTS estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    produto_id INT,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
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
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);

-- Tabela 'categoria'
CREATE TABLE IF NOT EXISTS categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome ENUM('Esporte', 'Utilitario', 'Corrida', 'Casual') NOT NULL
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

-- Inserir categorias
INSERT INTO categoria (nome) VALUES
    ('Esporte'),
    ('Utilitario'),
    ('Corrida'),
    ('Casual');

-- Inserir produtos
INSERT INTO produtos (subtitle, title, subtitle2, price, promotion, base_url, cor, tamanho, genero, marca, categoria_id) VALUES
    ('Subtítulo Camiseta 1', 'Camiseta 1', 'Descrição Camiseta 1', '50.00', 45.00, 'https://exemplo.com/camiseta1.jpg', 'Azul', 'M', 'Unissex', 'Nike', 1),
    ('Subtítulo Calças 1', 'Calças 1', 'Descrição Calças 1', '80.00', 75.00, 'https://exemplo.com/calcas1.jpg', 'Preta', 'G', 'Masculino', 'Adidas', 2),
    ('Subtítulo Bonés 1', 'Bonés 1', 'Descrição Bonés 1', '25.00', 20.00, 'https://exemplo.com/bones1.jpg', 'Preto', 'GG', 'Masculino', 'New Era', 3),
    ('Subtítulo Fones 1', 'Fones 1', 'Descrição Fones 1', '150.00', 140.00, 'https://exemplo.com/fones1.jpg', 'Branco', 'M', 'Unissex', 'Sony', 4),
    ('Subtítulo Tênis 1', 'Tênis 1', 'Descrição Tênis 1', '120.00', 100.00, 'https://exemplo.com/tenis1.jpg', 'Cinza', 'G', 'Masculino', 'Puma', 1);

-- Inserir usuários
INSERT INTO usuarios (nome, cpf, telefone, email, password, endereco, bairro, cidade, complemento, cep) VALUES
    ('João Silva', '12345678901', '85999990000', 'joao@example.com', 'senha123', 'Rua A, 123', 'Centro', 'Fortaleza', 'Apto 101', '12345678'),
    ('Maria Souza', '10987654321', '85999991111', 'maria@example.com', 'senha456', 'Rua B, 456', 'Bairro B', 'Fortaleza', NULL, '87654321');

-- Inserir estoque
INSERT INTO estoque (nome, quantidade, produto_id) VALUES
    ('Estoque Camiseta', 100, 1),
    ('Estoque Calças', 50, 2),
    ('Estoque Bonés', 30, 3),
    ('Estoque Fones', 20, 4),
    ('Estoque Tênis', 40, 5);

-- Inserir pedidos
INSERT INTO pedidos (numeroPedido, formapagamento, valorpedido, status, usuario_id) VALUES
    ('PED001', 'Cartão de Crédito', 200.00, 'Finalizado', 1),
    ('PED002', 'Boleto', 150.00, 'Encaminhado', 2);

-- Inserir pedidos_produtos
INSERT INTO pedidos_produtos (pedido_id, produto_id, quantidade) VALUES
    (1, 1, 2), -- Pedido 1 inclui 2 camisetas
    (1, 2, 1), -- Pedido 1 inclui 1 calça
    (2, 4, 1); -- Pedido 2 inclui 1 fone

-- Verificar os dados da tabela 'categoria'
SELECT * FROM categoria;

-- Verificar os dados da tabela 'produtos'
SELECT * FROM produtos;

-- Verificar os dados da tabela 'usuarios'
SELECT * FROM usuarios;

-- Verificar os dados da tabela 'estoque'
SELECT * FROM estoque;

-- Verificar os dados da tabela 'pedidos'
SELECT * FROM pedidos;

-- Verificar os dados da tabela 'pedidos_produtos'
SELECT * FROM pedidos_produtos;
