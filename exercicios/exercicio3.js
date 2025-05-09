// Ex3. Implementar um programa que recebe uma  nota de 0 a 10 e classifica como
//Aprovado, Recuperação ou Reprovado utilizando if-else if.

const prompt = require("prompt-sync")({ sigint: true});

function exercicio3(){
    const nota = parseFloat(prompt("Exercicio3 - Digite sua nota"));
    if (nota >= 8) console.log("Aprovado");
        else if (nota >=5) console.log("Recuperação");
    else console.log("Repreovado");

}

export default exercicio3;