class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push
    push(val){
        var newNode = new Node(val);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // Pop
    pop(){
        if(!head) return undefined;
        
        var poppedNode = this.tail;
        
        if (this.length === 1) {
            this.head = null;
            this.tail = null;

        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
        }

        this.length--;
        
        return poppedNode;
    }

    // Shift
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
        this.length--;

        return oldHead;
    }
}