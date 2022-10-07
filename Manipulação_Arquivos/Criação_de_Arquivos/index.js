//Manipulação de Arquivos com base na URL


//Definindo Constantes
const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

// Cria novo Arquivo
fs.writeFile('teste.txt', 'Meu teste, minha vida!', function(err){
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso!');
});

//Cria novo arquivo ou insere o conteúdo depois do que já existe
fs.appendFile('teste.txt', '\nNovo conteúdo de teste!', (err)=>{
    if(err) throw err;
    console.log('O arquivo foi alterado com sucesso!');
});


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

