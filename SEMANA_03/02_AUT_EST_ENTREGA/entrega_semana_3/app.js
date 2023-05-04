//app config
const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "./curriculo_db.db";
const hostname = "127.0.0.1";
const port = 3000;
const app = express();
app.use(express.json());

//Routes
app.post("/insertUser", urlencodedParser, insertUser); // CREATE         -> Insere um usuário
app.get("/users", getUsers); // READ           -> Retorna todos os usuários
app.get("/updateUser", getUpdateUser); // UPDATE (READ)  -> Retorna um usuário específico
app.post("/updateUser", urlencodedParser, postUpdateUser); // UPDATE (POST)  -> Atualiza um usuário
app.delete("/removeUser", urlencodedParser, removeUser); // DELETE         -> Remove um usuário

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

//Controllers

// Retorna todos os usuários
function getUsers(req, res) {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    const databaseConnection = new sqlite3.Database(DBPATH);
    const sqlQuery = "SELECT * FROM Usuarios ORDER BY id ASC";
    databaseConnection.all(sqlQuery, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    databaseConnection.close();
}

// Insere um usuário
function insertUser(req, res) {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    const database = new sqlite3.Database(DBPATH);
    const sqlQuery =
        "INSERT INTO Usuarios (nome, cargo, foto_url, telefone, email, endereco, texto_introducao) VALUES (?, ?, ?, ?, ?, ?, ?)";

    const params = [
        req.body.nome,
        req.body.cargo,
        req.body.foto_url,
        req.body.telefone,
        req.body.email,
        req.body.endereco,
        req.body.texto_introducao,
    ];

    database.run(sqlQuery, params, (err) => {
        if (err) {
            throw err;
        }
    });
    res.write("<h1>Usuario criado</h1>");
    database.close();
    res.end();
}

// Retorna um usuário específico
function getUpdateUser(req, res) {
    if (!req.query.userId) {
        res.statusCode = 400;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.write("<h1>Usuario não encontrado</h1>");
        res.end();
        return;
    }

    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    const sqlQuery = "SELECT * FROM Usuarios WHERE id=" + req.query.userId;

    const database = new sqlite3.Database(DBPATH); // Abre o banco
    database.all(sqlQuery, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    database.close(); // Fecha o banco
}

// Atualiza um usuário
function postUpdateUser(req, res) {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    const database = new sqlite3.Database(DBPATH);

    database.serialize(() => {
        const sqlQuery =
            "UPDATE Usuarios SET nome = ?, cargo = ?, foto_url = ?, telefone = ?, email = ?, endereco = ?, texto_introducao = ? WHERE id = ?";

        const params = [
            req.body.nome,
            req.body.cargo,
            req.body.foto_url,
            req.body.telefone,
            req.body.email,
            req.body.endereco,
            req.body.texto_introducao,
            req.query.userId,
        ];

        database.run(sqlQuery, params, (err) => {
            if (err) {
                throw err;
            }
            res.write("<h1>Usuario atualizado</h1>");
            res.end();
        });
    });

    database.close();
}

// Remove um usuário
function removeUser(req, res) {
    if (!req.query.userId) {
        res.statusCode = 400;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.write("<h1>Usuario não encontrado</h1>");
        res.end();
        return;
    }

    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    const sqlQuery = "DELETE FROM Usuarios WHERE id='" + req.query.userId + "'";

    const database = new sqlite3.Database(DBPATH); // Abre o banco
    database.run(sqlQuery, [], (err) => {
        if (err) {
            throw err;
        }
        res.write("<h1>Usuario removido</h1>");
        res.end();
    });
    database.close(); // Fecha o banco
}
