///Anotações extras sobre o curso e boas praticas nas escritas em java script Estas anotações são para pessoas iniciantes

/* console.log ele envia a mensagem para o console do navegador.
As mensagens devem estar entre os parenteses e as  mensagens dentro deles podem estar entre aspas simples
e aspas duplas , e o ponto e virgula é considerado uma boa prática entre os devs para evitar erros nos códigos, ele não é necessário em certas linhas.
*/


// EX. 1 Nome de exibição

console.log("Nome: Leonardo");

//Ex.2 árvore de natal

console.log("   a   ");
console.log("  b c  ");
console.log(" d e f ");
console.log("g h i j");
console.log("   k   "); 

/* Para fazermos comentarios de várias linhas usamos barra lateral e asterisco /* e termina o comentario com asterisco e barra dianteira
nós permitindo fazer diversas linhas de comentarios.
*/

// Desafio Final feito no Codedex Fazer uma nota fiscal com console.log

 console.log("================================================");
 console.log("                   Posto Gambino               ");
 console.log("------------------------------------------------");
 console.log("               Detalhes de compra              ");
 console.log("------------------------------------------------");
 console.log("     Item         Quantidade        Valor      ");
 console.log("------------------------------------------------");
 console.log("Gasolina Comum       12LT        R$ 70,00");
 console.log("-------------------------------------------------");

 //Forma divertida de aprender a fazer uma string.

 /* Agora iremos aprender a declarar Váriaveis como const e let.
 Estas váriaveis armazenam valores que podem ser usados posteriormente e cada váviavel tem um nome exemplo 

 const userId = "14561565815";
 let  User name = "Leonardo"

 Como podemos ver const declara a vàriavel userId  inf.está variavel não muda premenece a mesma 
 por isso usamos o const, seguida de um atribuir(=).
 E let é usado para váriaveis que podem ser alteradas como o nome do usuário,
 Você deve ter notado que nomes de variáveis como userName são escritos em camelCase, onde a primeira palavra é toda minúscula 
 e a primeira letra de todas as outras palavras são maiúsculas.
 Esta convenção é usada para nomes de variáveis feitos de mais de uma palavra.
O = sinal de igual significa atribuição.
*/

//Ex.1 

const userId = "123456670";
console.log (userId);

userId = "321";

//Teremos um erro de syntax na declração do userId tentando reatribuir um novo valor ou deixando ele em branco

//Ex.1 Neste caso usamos o const e let para ativuir as váriaveis idade, nome, cor favorita e humor com o console .log 
// inserimos as mensagens do console e támbem atribuimos as váriaveis

const userIdade = "25";

 console.log("Idade do usuário");

console.log(userIdade);

let userName = "Leonardo"

console.log("Nome do usuário");

console.log(userName);


console.log("Cor favorita");

const variableCor = "Roxo";

console.log(variableCor);

console.log("Humor de hoje");

let variableHumor = "Feliz";

console.log(variableHumor);

// Tipos de dados armazenados com let e const

//Números podem ser quais quer números decimais ou inteiros

let year = "2023";
const daysofWeek = "7";
let age = "24";
const pi = "3,14";

//Cordas as cordas são envoltas de aspas "" ou aspas ''.

let messange = "Good night";
let name = 'Leonardo';
const company = "Lr store";

//Booleano  parte da base de confirmação com true e false

let hungry = "true";
let earthIsFlat = "False";

//Indefinodo toda e qualquer váriavel que foi declarda; mas ainda não recebu valor um "undefined" 
//Ou pode acontecer quando um valor undefined é atribuido explicitamente.

let startDate = "01/02/2025";
let endDate=; // let endDate é undefined

console.log(startDate);
console.log(endDate);

//Ex.1 Fazer uma apresentação de empresa com os tipos de dados

const companyName = "Niteowl, Inc.";
const foundingYear = 2022;
let isActive = true;
let fundingAmount = undefined;

console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);

/* Operadores matématicos 
+ Adição
- Subatração
/ Divisão
* Múltiplicação
% Módulo (denvolve o restante)
** Exponente em breve...
*/

// Ex.1 pontuação

let score = 0;       

score = 4 + 3;        
score = 4 - 3;        
score = 4 * 3;        
score = 4 / 3;        
score = 4 % 3;       

console.log(score);  

//Ex.2 coneversor básico de temperatura 

let temp_f = 56;
let temp_c = (temp_f - 32) / 1.8;

console.log(temp_c);

