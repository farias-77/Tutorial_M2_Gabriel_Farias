const http    = require('http'); //importa o modulo http nativo do node
const sqlite3 = require('sqlite3').verbose();  // importa o módulo sqlite3
const hostname = '127.0.0.1'; //define onde o servidor será executado (localhost)
const port = 3012; //define em qual porta o servidor será executado

const server = http.createServer((req, res) => { // cria o servidor a partir do modulo http
  res.statusCode = 200; //define o status code da response como 200
  res.setHeader('Content-Type', 'text/html'); //define que a response será do tipo .html
  var db = new sqlite3.Database('dbUser.db'); //config do banco de dados
  db.get('SELECT * \
          FROM tbUser \
          WHERE userId = 1', [], (err, row) => {
		res.write("<h1> Etapa 1 - INSTALACAO </h1>") 
    res.write("<h2> Servidor de Banco de Dados SQLite3 </h2>") 
	  res.write("<h3> " + row.title + "</h3>"); 
	  res.end(); 
   }); //busca informações no banco de dados e insere na response em html, enviando a response
});
server.listen(port, hostname, () => { //informa ao servidor que ele deverá estar atento a requisições na porta informada
  console.log(`Server running at http://${hostname}:${port}/`);
});