///Stacks pilas de informações 

class Node {
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


