// Criar Servidor node, módulo HTTP ...


//Definindo Constantes
const http = require('http');

const hostname = "127.0.0.1";
const port = 8080;

//Criando Servidor
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Meu teste, minha vida");

})

server.listen(port, hostname, ()=>{
    console.log("Servidor Online!");

})
