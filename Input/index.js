//Leitura de Input da linha de comando

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Qual seu nome?\n", (nome)=>{
    console.log("\nSeu nome é: " + nome + '\n');

    rl.question("Qual sua idade?\n", (idade)=>{
        console.log("\nSua idade é: " + idade + '\n');
    })
});

rl.on('close', ()=>{
    console.log("\nAté mais!");
    process.exit(0);
});