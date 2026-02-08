 // Связанные списки

 class LinkedListNode {
    constructor(value, next = null) {
      
      this.value = value;
      this.next = next
      
    }
    
    toString() {
      return `${this.value}`
    }
  }
  
  class LinkedList {
    
    constructor() {
      this.head = null;
      this.tail = null;
    }
    
    append(value) {
      const NewNode = new LinkedListNode(value);
      
      if(!this.head || !this.tail) {
        this.head = NewNode;
        this.tail = NewNode;
        
        return this;
      }
      
      this.tail.next = NewNode;
      
      this.tail = NewNode;
      
      return this;
    }
    
    prepend(value) {
      const newNode = new LinkedListNode(value, this.head);
      
      this.head = newNode
      
      if(!this.tail) {
        this.tail = newNode;
      }
      
      return this;
      
    }
    
    toArray() {
      const nodes = [];
      
      let currentNode = this.head
      
      while(currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next
      }
      
      return nodes;
    }
    
    toString() {
      return this.toArray().map(node => node.toString()).toString()
    }
  }
  
  const list = new LinkedList();
  
  list.append('a').append('b').append('c');
  
  console.log(JSON.stringify(list))