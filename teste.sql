CREATE DATABASE cadastro;

SHOW DATABASES;

USE cadastro;

SHOW TABLES;

CREATE TABLE usuarios(
    nome VARCHAR(44),
    email VARCHAR(24),
    idade INT
);

SHOW TABLES;

DESCRIBE usuarios;

SELECT * FROM usuarios;

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Macaquinho",
    "macaquinho@gmail.com",
    7
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "drogadinho",
    "bababoe@gocrazy.com",
    83
);

SELECT * FROM usuarios WHERE idade >= 7;

DELETE FROM usuarios WHERE nome = "macaquinho"

UPDATE usuarios SET nome = "macacão" WHERE nome = "macaco";
UPDATE usuarios SET nome = "macacão" WHERE nome = "macaco" && idade = 77;

