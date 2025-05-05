/*1. Escreva  um programa que recebe um número inteiro e verifica se ele é par ou impar utilizando 
estrutura de contrle if

Para executar o projeto digite no prompt node exercicio1.js

*/

const readline = require('readline');

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question('Digite um numero que seja inteiro: ', function (input) {
    const num = parseInt(input);

    if (isNaN(num)) {
        console.log('Digite um número válido.');
    } else {
        if (num % 2 === 0) {
            console.log('O número informado é par!')
        } else {
            console.log('O npumero informado é ímpar!');
        }
    }
    r.close();
})
