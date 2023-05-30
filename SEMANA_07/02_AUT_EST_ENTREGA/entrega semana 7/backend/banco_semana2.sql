CREATE TABLE Usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cargo TEXT,
    foto_url TEXT,
    telefone TEXT,
    email TEXT,
    endereco TEXT,
    texto_introducao TEXT
);

CREATE TABLE Formacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    data_inicio DATE,
    data_fim DATE,
    curso TEXT,
    descricao TEXT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
);

CREATE TABLE Experiencias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    data_inicio DATE,
    data_fim DATE,
    nome_empresa TEXT,
    descricao TEXT,
    cargo TEXT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
);

CREATE TABLE Realizacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    data DATE,
    titulo TEXT,
    descricao TEXT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
);

CREATE TABLE Habilidades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    habilidade TEXT,
    avaliacao INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
);

CREATE TABLE Personalidade (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    aspecto_personalidade TEXT,
    avaliacao INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
);
