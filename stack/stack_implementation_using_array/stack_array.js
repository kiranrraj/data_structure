// Author       : Kiran Raj R
// Creation Date: 17/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Stack 
//                Implemented using array

class Stack {
    constructor() {
        this.stackContainer = [];
        this.top = 0;
    }

    pushElement(element) {
        this.stackContainer.push(element);
        this.top++;
    }

    popElement() {
        let popElement = this.stackContainer.pop();
        this.top--;
        return popElement;
    }

    getPeek() {
        return this.stackContainer[this.top-1];
    }

    isEmpty() {
        return this.top === 0;
    }

    getLength() {
        return this.top;
    }

    getElements() {
        return this.stackContainer;
    }

    isElementInStack(element){
        if(element != undefined){

            for(let i=0; i<this.getPeek(); i++){
                if(this.stackContainer[i] == element){
                    return `Element '${element}' found at index ${i}`;
                }else{
                    return `Element '${element}' not found in stack`;
                }
            }

        }else{
            return `Element not provided`;
        }
    }
}

let myStack = new Stack();

myStack.pushElement(10);
myStack.pushElement(40);
myStack.pushElement(30);
myStack.pushElement(50);
myStack.pushElement(20);
myStack.pushElement(60);
console.log(`The elements in the stack is ${myStack.getElements()}`);
console.log(`The peek element in the stack is: ${myStack.getPeek()}`);
console.log(`Length of the stack is ${myStack.getLength()}`);
console.log(`Is the stack empty? ${myStack.isEmpty()}`);
console.log(myStack.isElementInStack(10));
console.log(myStack.isElementInStack());
console.log("------------------------------");
myStack.popElement();
myStack.popElement();
myStack.popElement();
myStack.popElement();
myStack.popElement();
console.log(`The elements in the stack is ${myStack.getElements()}`);
console.log(`The peek element in the stack is: ${myStack.getPeek()}`);
console.log(`Length of the stack is ${myStack.getLength()}`);
console.log(`Is the stack empty? ${myStack.isEmpty()}`);
console.log(myStack.isElementInStack(100));