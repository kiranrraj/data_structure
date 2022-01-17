class Queue{
    constructor(){
        this.elements = []
    }

    enqueue(element){
        return this.elements.push(element);
    }

    dequeue(){
        if(this.elements.length > 0){
            return this.elements.shift();
        }
    }

    peek(){
        return this.elements[this.elements.length - 1]
    }

    isEmpty(){
        return this.elements.length == 0;
    }

    length(){
        return this.elements.length;
    }

    clear(){
        return this.elements = [];
    }
    print(){
        return this.elements;
    }

}

let myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);
console.log(myQueue.print());
// [ 10, 20, 30, 40, 50 ]

myQueue.dequeue();
console.log(myQueue.print());
// [ 20, 30, 40, 50 ]

myQueue.dequeue();
console.log(myQueue.print());
// [ 30, 40, 50 ]

myQueue.enqueue(100);
myQueue.enqueue(150);
console.log(myQueue.print());
// [ 30, 40, 50, 100, 150 ]

console.log(myQueue.peek());
// 150

console.log(myQueue.isEmpty());
// false

console.log(myQueue.length());
// 5

console.log(myQueue.clear());
// []

console.log(myQueue.isEmpty());
// true