//Leitura de Arquivos com base na URL


//Definindo Constantes
const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

//Criando Servidor
const server = http.createServer((req, res) =>{


    if(req.url == '/teste'){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }

    else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.write("Erro - URL Inválida -> Caminho");
        return res.end();
    }

    

})

server.listen(port, hostname, ()=>{
    console.log("Servidor Online!");

})

