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
    ('Camiseta'),
    ('Calças'),
    ('Bonés'),
    ('Fones'),
    ('Tênis');

-- Verificar se os dados foram inseridos corretamente na tabela 'categoria'
SELECT * FROM categoria;

