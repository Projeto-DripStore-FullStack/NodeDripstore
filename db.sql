-- Criar o banco de dados 'dripstore'
CREATE DATABASE IF NOT EXISTS dripstore;

-- Usar o banco de dados
USE dripstore;

-- Criar a tabela 'categorias'
CREATE TABLE IF NOT EXISTS categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criar a tabela 'produtos'
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subtitle VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    subtitle2 VARCHAR(255),
    price VARCHAR(255) NOT NULL,
    promotion DECIMAL(10, 2),
    base_url VARCHAR(255) NOT NULL
);

-- Criar tabela intermediária para relação entre 'produtos' e 'categorias'
CREATE TABLE IF NOT EXISTS produtos_categoria (
    produto_id INT,
    categoria_id INT,
    PRIMARY KEY (produto_id, categoria_id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id),
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);

-- Criar a tabela 'usuarios'
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Criar a tabela 'estoque'
CREATE TABLE IF NOT EXISTS estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    produto_id INT,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Criar a tabela 'pedidos'
CREATE TABLE IF NOT EXISTS pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vendedor VARCHAR(255) NOT NULL,
    cliente VARCHAR(255) NOT NULL,
    formapagamento VARCHAR(255) NOT NULL,
    valorpedido DECIMAL(10, 2) NOT NULL,
    deleted BOOLEAN DEFAULT FALSE,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Inserir dados na tabela 'categorias'
INSERT INTO categoria (nome) VALUES 
    ('Camiseta'),
    ('Calças'),
    ('Bonés'),
    ('Fones'),
    ('Tênis');

-- Verificar os dados da tabela 'categorias'
SELECT * FROM categoria;

-- Inserir dados na tabela 'produtos'
INSERT INTO produtos (subtitle, title, subtitle2, price, promotion, base_url) VALUES 
    ('Subtítulo Camiseta 1', 'Camiseta 1', 'Descrição Camiseta 1', '50.00', 45.00, 'https://exemplo.com/camiseta1.jpg'),
    ('Subtítulo Calças 1', 'Calças 1', 'Descrição Calças 1', '80.00', 75.00, 'https://exemplo.com/calcas1.jpg'),
    ('Subtítulo Bonés 1', 'Bonés 1', 'Descrição Bonés 1', '25.00', 20.00, 'https://exemplo.com/bones1.jpg'),
    ('Subtítulo Fones 1', 'Fones 1', 'Descrição Fones 1', '150.00', 140.00, 'https://exemplo.com/fones1.jpg'),
    ('Subtítulo Tênis 1', 'Tênis 1', 'Descrição Tênis 1', '120.00', 100.00, 'https://exemplo.com/tenis1.jpg');

-- Verificar os dados da tabela 'produtos'
SELECT * FROM produtos;

-- Inserir dados na tabela intermediária 'produtos_categorias' para associar produtos a categorias
INSERT INTO produtos_categoria (produto_id, categoria_id) VALUES
    (1, 1), -- Produto 'Camiseta 1' pertence à categoria 'Camiseta'
    (2, 2), -- Produto 'Calças 1' pertence à categoria 'Calças'
    (3, 3), -- Produto 'Bonés 1' pertence à categoria 'Bonés'
    (4, 4), -- Produto 'Fones 1' pertence à categoria 'Fones'
    (5, 5); -- Produto 'Tênis 1' pertence à categoria 'Tênis'

-- Verificar os dados da tabela 'produtos_categorias'
SELECT * FROM produtos_categoria;

-- Inserir dados na tabela 'usuarios'
INSERT INTO usuarios (nome, cpf, telefone, email, password) VALUES
    ('João Silva', '12345678901', '85999990000', 'joao@example.com', 'senha123'),
    ('Maria Souza', '10987654321', '85999991111', 'maria@example.com', 'senha456');

-- Verificar os dados da tabela 'usuarios'
SELECT * FROM usuarios;

-- Inserir dados na tabela 'estoque'
INSERT INTO estoque (nome, quantidade, produto_id) VALUES
    ('Estoque Camiseta', 100, 1),
    ('Estoque Calças', 50, 2),
    ('Estoque Bonés', 30, 3),
    ('Estoque Fones', 20, 4),
    ('Estoque Tênis', 40, 5);

-- Verificar os dados da tabela 'estoque'
SELECT * FROM estoque;

-- Inserir dados na tabela 'pedidos'
INSERT INTO pedidos (vendedor, cliente, formapagamento, valorpedido, deleted, usuario_id) VALUES
    ('Vendedor A', 'Cliente X', 'Cartão de Crédito', 200.00, FALSE, 1),
    ('Vendedor B', 'Cliente Y', 'Boleto', 150.00, FALSE, 2);

-- Verificar os dados da tabela 'pedidos'
SELECT * FROM pedidos;
