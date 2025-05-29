///Stacks pilas de informações 

/*class Node {
    constructor(value){
        this.values = value 
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }

    push(value){
        let newNode = Node(value)
        newNode.next = this.top
        this.top = newNode
    }

    pop(){
        if(this.top) return null
        let poppedValue = this.top.value
        this.top = this.top.next
        return poppedValue
    }
} 
    fim das pilhas em stack


Árvores em javascript, são um sistema hierarquico de informções conhecida pelos termos root(raiz)
pai(parent), filho(child) e folha(leaf) tendo estas informações podemos saber a altura de uma árvore 
que seria o maior caminho da raiz ate uma folha.
E temos também árvore binária que pode ter dois filhos apenas em cada no tanto para a direita quanto para a esquerda.*/

// Definição do nó
class Node {
  constructor(valor) {
    this.valor = valor;
    this.filhos = [];
  }

  adicionarFilho(filho) {
    this.filhos.push(filho);
  }
}  ///implementação básica de árvore 



// Criando a raiz da árvore
const raiz = new Node("A");

// Adicionando filhos à raiz
const b = new Node("B");
const c = new Node("C");
raiz.adicionarFilho(b);
raiz.adicionarFilho(c);

// Adicionando filhos a B
b.adicionarFilho(new Node("D"));
b.adicionarFilho(new Node("E"));

// Adicionando filho a C
c.adicionarFilho(new Node("F"));

// Função para percorrer a árvore em profundidade (DFS)
function percorrer(node) {
  console.log(node.valor);
  for (const filho of node.filhos) {
    percorrer(filho);
  }
}

percorrer(raiz);

/*Exemplo de uso prático de árvores nossas saídas em console devem ser 
A
B
D
E
C
F
E*/

