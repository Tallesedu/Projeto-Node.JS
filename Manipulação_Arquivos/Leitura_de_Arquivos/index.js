const fs = require('fs');

//Leitura Simples de Arquivos
/* fs.readFile('teste.txt', (err, data)=>{
    console.log(data.toString());
})
 */

fs.readFile('teste.txt', ()=>{

    let str = data.toString();

    //Quebra em um caracter específico
    let newStr = str.split('/'); 

    //Lê em uma determinada posição
    let newStr2 = str.substr(0, 3);

    console.log(newStr);

})