/* Ex4. Criar um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilizar switch-case para implantar a lógica de cada opção selecionada*/

const prompt = require("prompt-sync")({ sigint: true });

function exercicio4(){

    const opcao = prompt("Exercicio 4 - Escolha uma opção: N1. OI, N2. Tudo bem?, N3. Estou indo embora");
    switch(opcao){
        case "1":
            console.log("Você escolheu OI");
            break;
            case "2":
                console.log("Você escolheu Tudo bem?");
                break;
                case "3":

                console.log("Você escolheu Estou indo embora");
                break;
                default:
                    console.log("Opção Inválidade.");
    
    }
}

export default  exercicio4;