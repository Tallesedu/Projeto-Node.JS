class Teste{
    constructor(){
        console.log('Classe Criada!');
        this.nome = 'Talles';
    }

    testes(){
        console.log('O nome cadastrado na classe é : ' +  this.nome);
    }
}

//Exporta a classe inteira
module.exports = Teste;