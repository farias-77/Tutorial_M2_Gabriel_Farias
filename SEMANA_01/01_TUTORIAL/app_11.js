const http = require('http'); //importa módulo http nativo do node
const hostname = '127.0.0.1'; //define qual será o host do servidor
const port = 3011; //define em qual porta o servidor será executado
const server = http.createServer((req, res) => { //cria o servidor a partir do módulo http
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> <head> <title>Etapa 0 - INSTALACAO</title></head> \
              <body>\
                <div id="main"> \
                       <h1> Etapa 1 - INSTALACAO - Servidor Node.js </h1> \
                       <H2> Meu servidor NODE.js funciona!</H2> </div> \
              </body> \
           </html>');

           //define os componentes da response, sendo o status code, header com o tipo de arquivo que vai retornar e o retorno de fato
});
server.listen(port, hostname, () => { //informa ao servidor qual porta ele deverá ouvir para receber requests
  console.log(`Server running at http://${hostname}:${port}/`);
});