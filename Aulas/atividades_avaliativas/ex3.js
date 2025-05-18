
// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.


const prompt= require("prompt-sync")({signint: true});

  function ex3(){
  const nota = parseFloat(prompt("Ex: digite sua nota: "));
  if(nota >=7)
    console.log("Aprovafo");
    else if(nota >= 6)
      console.log("Recuperação");
      else (nota <= 4)
        console.log("Reprovado");}

        module.export = ex3;