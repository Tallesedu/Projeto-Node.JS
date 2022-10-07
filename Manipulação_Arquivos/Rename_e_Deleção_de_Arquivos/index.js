const fs = require('fs');
const read = require('readline');

//Deleta Arquivo
fs.unlink('teste.txt', (err)=>{
    console.log("O arquivo foi deletado com sucesso!");
})

//Renomea Arquivo
fs.rename('teste.txt', 'teste_Renomeado.txt', (err)=>{
    console.log('Arquivo Renomeado com sucesso!');
})

