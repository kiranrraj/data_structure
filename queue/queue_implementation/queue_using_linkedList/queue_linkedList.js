const { timingSafeEqual } = require("crypto");
const { runInThisContext } = require("vm");

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue_LinkedList {
    constructor(){
        this.next= null;
        this.length = 0;
    }

    getLength(){
        return this.length;
    }

    clear(){
        // Set the head's next to null and length to zero
        this.next = null;
        this.length = 0;
    }

    isEmpty(){
        // Return true if the queue is empty
        return this.getLength() == 0;
    }

    enqueue(data){
        // Create a new node 
        let newNode = new Node(data);

        // Set the variable to the first element
        let head = this.next;

        // If the queue is empty, head will point to the new node
        if(head == null){

            this.next = newNode;

        } else{
            // To find the last node, queue will loop until this.next is not
            // equal to null. In linked list last node 's next will point to null
            while(head.next != null){
                head = head.next;
            }
            // We set final node's next to newNode
            head.next= newNode
        }

        this.length++;
    }

    dequeue(){

        // Return empty message if the queue is empty
        if(this.next == null){
            return "The queue is empty";
        }

        // Point the head's next to second node.
        this.next = this.next.next;
        // Reduce the size of the queue by 1;
        this.length--;
    }

    peek(){
        let head = this.next;
        
        if(head == null){
            return "The queue is empty"
        } else{
            while(head.next != null){
                head = head.next;
            }
        }
        return head.data;
    }

    printElements(){
        if(this.getLength() !== 0 ){
            let head= this.next;
            let elementArray = [];
            while(head!= null){
                elementArray.push(head.data);
                head = head.next;
            }
            return elementArray;
        }else{
            return "The queue is empty";
        }
    }
}

let newQueue = new Queue_LinkedList();

newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.enqueue(40);
newQueue.enqueue(50);

console.log("-----------------------------------------------");
console.log(`Queue Elements: ${newQueue.printElements()}`);
console.log(`The queue is empty? ${newQueue.isEmpty()}`);
console.log(`Length of queue: ${newQueue.getLength()}`);
console.log(`Value of peak element: ${newQueue.peek()}`);
console.log("-----------------------------------------------");


newQueue.dequeue();
newQueue.dequeue();
newQueue.enqueue(140);
newQueue.enqueue(150);

console.log("-----------------------------------------------");
console.log(`Queue Elements: ${newQueue.printElements()}`);
console.log(`The queue is empty? ${newQueue.isEmpty()}`);
console.log(`Length of queue: ${newQueue.getLength()}`);
console.log(`Value of peak element: ${newQueue.peek()}`);
console.log("-----------------------------------------------");

newQueue.clear();
console.log("-----------------------------------------------");
console.log(`Queue Elements: ${newQueue.printElements()}`);
console.log(`The queue is empty? ${newQueue.isEmpty()}`);
console.log(`Length of queue: ${newQueue.getLength()}`);
console.log(`Value of peak element: ${newQueue.peek()}`);
console.log("-----------------------------------------------");

newQueue.enqueue(100);
newQueue.enqueue(200);
newQueue.enqueue(300);
newQueue.enqueue(400);
newQueue.enqueue(500);
newQueue.enqueue(600);
newQueue.enqueue(700);
newQueue.enqueue(800);

console.log("-----------------------------------------------");
console.log(`Queue Elements: ${newQueue.printElements()}`);
console.log(`The queue is empty? ${newQueue.isEmpty()}`);
console.log(`Length of queue: ${newQueue.getLength()}`);
console.log(`Value of peak element: ${newQueue.peek()}`);
console.log("-----------------------------------------------");