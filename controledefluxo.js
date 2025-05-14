// Condicionais if e else com if ele válida se a informação é true e executa o código se for verdadeira
// se não for verdaddeira ela apenas pula oque está após o if e nada acontece

//Ex.1 fazendo um impressor de bom dia caso a hora seja menor que 12H

const hora = 11; // minha const tem que ser menor que 12h para imprimir Bom dia no console

if(hora < 12) {
  console.log("Bom dia");
}
  

// Já controle de fluxo com o else se a condição dentro do if for false ele executa oque está dentro do else

//EX.2 Se for abaixo do meio dia imprime Bom dia se for maior que meio dia imprime Boa tarde.

const hora = "10";

if(hora < 12){
  console.log("Bom dia!");
  }else{  
    console.log("Boa tarde"); 
}
  

//Como o const foi abaixo do meio dia ele imprime no console Bom dia , se fosse exemplo 14 imprimiria Boa tarde

//Nesta condição normamente estamos comparando valores então temos operadores de comparação

//Saõ eles: === estrito igual, !== rigoroso não é igual, > maior do que, >= maior ou igual, < menor do que, =< igual ou menor que.

// Além do if/else podemos usar else if para fazer mais comparações ainda no código
// isso não fica estrito á apenas um podemosincluir quantos quiser


//Ex.3 Fazendo comparativo de ph entre ácido, básico e neutro

const = "6";

if(ph > 7){
  console.log("Básico");
}else if(ph < 7){
  console.log("Ácido");
}else{
  console.log("Neutro");
}


///Vendo sobre Math.random() digamos que usamos 

console.log(Math.random());
console.log(Math.random());

//Ele irá imprimir dois dúmeros distintos mas inteiros no console, e para arredondar mais estes números
//Usamos o Math.floor()

console.log(Math.floor(Math.random() * 10));

///Ex.4 Fazendo um gerador de respostas para uma bola 8 mágica

const question = "Faça sua pergunta!";

const randomNumber = Math.floor(Math.random()*9) +1; //Gera a resposta conforme o número até 9, tudo isso de forma aleatória pelo Math.random
//Math.floor está centralizando os numero até 9

let answer = ""; //Váriavel de resposta aleatória as aspas ficam vazias para serem preenchidas pelas respostas dos números

if(randomNumber === 1){
  answer = 'Sim está certo'; /// este foi nosso console.log só substituido por answer do let(Váriavel mutável)
}else if(randomNumber === 2){
  answer = 'Pode estar correto';
}else if(randomNumber === 3){
  answer = 'Faça outra pergunta';
} else if(randomNumber === 4){
  answer = 'Não foi desta vez';
}else if(randomNumber === 5){
  answer = 'Você errou';
} else if(randomNumber === 6){
 answer = 'Pergunta boa';
} else if(randomNumber === 7){
  answer = 'Tentaremos outro dia';
}else if(randomNumber === 8){
  answer = 'Idiota!!';
}else if(randomNumber === 9){
  answer = 'Acabou sua vez';
}else{
  answer = 'Erro';
}

console.log("Pergunta", question);
console.log("Resposta", answer);