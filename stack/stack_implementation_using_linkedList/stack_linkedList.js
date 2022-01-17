// Author       : Kiran Raj R
// Creation Date: 18/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Stack 
//                Implemented using linked list


// To create node/element
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

// Stack implementation 
class Stack {
    constructor() {
        this.head = null;
        this.peek = 0;
    }

    getLength(){
        return this.peek;
    }

    // Clear the stack by setting head to null.
    clear(){
        // Set the head's next to null and peek to zero
        this.next = null;
        this.peek = 0;
    }

    isEmpty(){
        // Return true if the stack is empty
        return this.getLength() == 0;
    }

    push(data){
        // Create a new node 
        let newNode = new Node(data);

        // Set the variable to the first element to variable head
        let head = this.next;

        // If the stack is empty, head will point to the new node
        if(head == null){
            this.next = newNode;
        } else{

            // To find the last node, we will loop until this.next is not
            // equal to null. In linked list last node's next will point to null
            while(head.next != null){
                head = head.next;
            }
            // We set final node's next to newNode
            head.next= newNode
        }

        this.peek++;
    }

    pop(){

        let head = this.next;
        // Return empty message if the stack is empty
        if(this.next == null){
            return "The stack is empty";
        } else {
            while(head.next.next != null){
                head = head.next;
            }
        }

        // Set the penultimate element's next to null;
        head.next = null;

        // Reduce the size of the stack by 1;
        this.peek--;
    }

    getPeek(){
        let head = this.next;
        
        if(head == null){
            return "The stack is empty"
        } else{
            while(head.next != null){
                head = head.next;
            }
        }
        return head.data;
    }

    printElements(){
        if(this.getLength() !== 0 ){
            let head = this.next;
            let elementArray = [];

            while(head != null){
                elementArray.push(head.data);
                head = head.next;
            }
            return elementArray;
        }else{
            return "The stack is empty";
        }
    }

    isElementInStack(data){
        if (data == undefined) return `Element not provided`;
        if(!this.isEmpty()){

            let head = this.next;
            let i = 0;
        
            while(head !== null){
                if(head.data == data) {
                    return `Element ${data} found at index ${i}`;
                }else{
                    head = head.next;
                    i++;
                }  
            }
            return `Element ${data} not found.`;
        }else{
            return `Element ${data} not found.`;
        }
    }
}

let newStack = new Stack();

newStack.push(10);
newStack.push(20);
newStack.push(30);
newStack.push(40);
newStack.push(50);

console.log("-----------------------------------------------");
console.log(`Stack Elements: ${newStack.printElements()}`);
console.log(`The stack is empty? ${newStack.isEmpty()}`);
console.log(`Length of stack: ${newStack.getLength()}`);
console.log(`Value of peak element: ${newStack.getPeek()}`);
console.log(`${newStack.isElementInStack(40)}`)
console.log("-----------------------------------------------");


newStack.pop();
newStack.pop();
newStack.push(140);
newStack.push(150);

console.log("-----------------------------------------------");
console.log(`Stack Elements: ${newStack.printElements()}`);
console.log(`The stack is empty? ${newStack.isEmpty()}`);
console.log(`Length of stack: ${newStack.getLength()}`);
console.log(`Value of peak element: ${newStack.getPeek()}`);
console.log(`${newStack.isElementInStack(40)}`)
console.log("-----------------------------------------------");

newStack.clear();
console.log("-----------------------------------------------");
console.log(`Stack Elements: ${newStack.printElements()}`);
console.log(`The stack is empty? ${newStack.isEmpty()}`);
console.log(`Length of stack: ${newStack.getLength()}`);
console.log(`Value of peak element: ${newStack.getPeek()}`);
console.log(`${newStack.isElementInStack(40)}`)
console.log("-----------------------------------------------");

newStack.push(100);
newStack.push(200);
newStack.push(300);
newStack.push(400);
newStack.push(500);
newStack.push(600);
newStack.push(700);
newStack.push(800);

console.log("-----------------------------------------------");
console.log(`Stack Elements: ${newStack.printElements()}`);
console.log(`The stack is empty? ${newStack.isEmpty()}`);
console.log(`Length of stack: ${newStack.getLength()}`);
console.log(`Value of peak element: ${newStack.getPeek()}`);
console.log(`${newStack.isElementInStack(100)}`)
console.log("-----------------------------------------------");