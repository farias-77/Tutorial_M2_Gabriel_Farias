const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "database.db";

app.use(express.json());

app.get("/usuarios", (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = "SELECT * FROM Usuarios";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
    db.close();
});

app.get("/formacoes", (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = "SELECT * FROM Formacoes";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
    db.close();
});

app.get("/experiencias", (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = "SELECT * FROM Experiencias";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
    db.close();
});

app.get("/realizacoes", (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = "SELECT * FROM Realizacoes";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
    db.close();
});

app.get("/habilidades", (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = "SELECT * FROM Habilidades";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
    db.close();
});

app.get("/personalidade", (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = "SELECT * FROM Personalidade";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
    db.close();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
