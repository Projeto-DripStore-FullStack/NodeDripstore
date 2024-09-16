-- Criar o banco de dados 'dripstore'
CREATE DATABASE IF NOT EXISTS dripstore;

-- Usar o banco de dados
USE dripstore;

-- Criar a tabela 'categoria'
CREATE TABLE IF NOT EXISTS categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criar a tabela 'subcategoria'
CREATE TABLE IF NOT EXISTS subcategoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    categoriaId INT,
    FOREIGN KEY (categoriaId) REFERENCES categoria(id)
);

-- Inserir dados na tabela 'categoria'
INSERT INTO categoria (nome) VALUES 
    ('Esporte'),
    ('Casual'),
    ('Masculina'),
    ('Feminina'),
    ('Infantil');

-- Verificar se os dados foram inseridos corretamente na tabela 'categoria'
SELECT * FROM categoria;

-- Inserir dados na tabela 'subcategoria' relacionados a cada categoria
INSERT INTO subcategoria (nome, categoriaId) VALUES 
    ('Calça', 1),       -- Relacionado à categoria 'Esporte'
    ('Camisa', 1),
    ('Sapato', 1),
    ('Boné', 1),
    ('Shorts', 1),
    
    ('Calça', 2),       -- Relacionado à categoria 'Casual'
    ('Camisa', 2),
    ('Sapato', 2),
    ('Boné', 2),
    ('Shorts', 2),
    
    ('Calça', 3),       -- Relacionado à categoria 'Masculina'
    ('Camisa', 3),
    ('Sapato', 3),
    ('Boné', 3),
    ('Shorts', 3),
    
    ('Calça', 4),       -- Relacionado à categoria 'Feminina'
    ('Camisa', 4),
    ('Sapato', 4),
    ('Boné', 4),
    ('Shorts', 4),
    
    ('Calça', 5),       -- Relacionado à categoria 'Infantil'
    ('Camisa', 5),
    ('Sapato', 5),
    ('Boné', 5),
    ('Shorts', 5);

-- Verificar se os dados foram inseridos corretamente na tabela 'subcategoria'
SELECT * FROM subcategoria;
