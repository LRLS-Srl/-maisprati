/* Criar um array chamado 'numeros' contendo 10 valores
numéricos à sua escolha.

// Usar metodos de array para calcular:

//A soma de todos os elementos 

// A média dos elementos. 
// Gerar um array chamado pares que contenha apenas os números pares.

*/

/*let numero =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let soma = 0
let media = 0 
let pares = []

for(let i = 0; i< numeros.lenght; i++) {
    soma += numeros[i]
    if(numeros[i] % 2 === 0){
        pares.push(numeros[i])
    }
}

media = soma/numeros.lenght

console.log(soma)
console.log(media)

console.log(soma)
console.log(media)
console.log(pares)

/* let soma = numeros.reduce((acumulador, valor) =>
    acumulador + valor,0)

let pares = numeros.filter(( num=> num % 2 ==== 0)) "filter esta filtrando os numeros que estão (num=> num % 2 ==== 0")"

media = soma/numeros.lenght

console.log(soma)

Este é outro modo que poderia ser escrito o codigo para validar a soma, media e par

*/

// ordenando o array em ordem crescente


/*let numeros = [20, 10, 40, 30, 50,];

numeros.sort(function(a,b)
{
    return a - b;

}); feito antes da explicação

*/

/*let numeros = [3, 6, 1, 2, -3,]
let n = numeros.length
let matriz =[]

for(let i = 0; i < n; i++){
for(let j = 0; j < n - i; j++){ 
    if(numeros[i] > numeros[j + 1])
        {
        let temp = numeros[j] 
        numeros[j] = numeros[j + 1]
        numeros[j + 1] = temp
        
    }
}

}

console.log(numeros)

console.log(numeros.sort((a, b)=> a - b))

*/

/// Se atentar sempre a não esquecer informações 

for(let i = 0; i < 3; i++){
    matriz[i] = []

for(let j = 0; j < 3; j++){
    matriz[i][j] = 10;

}
}


