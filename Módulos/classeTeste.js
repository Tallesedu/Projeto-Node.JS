function hello (){
    console.log("Olá Usuário!");
}

// Exports -> Permite executar trecho de código em outros arquivos (Funções, variáveis, classes, etc).
exports.Hello = hello;

var obj = {
    nome: 'Talles',
    idade: 21,
    cidade: 'Goiânia'
}

exports.Objeto = obj;