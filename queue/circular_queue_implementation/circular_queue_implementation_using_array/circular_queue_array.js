class CircularQueue{

    constructor(maxSize){
        this.queueArray = [];
        this.maxSize = maxSize;
        this.length = 0;
        this.front = 0;
        this.rear = -1;
    }

    // Checks whether the queue is empty
    isEmpty(){
        return this.length == 0;
    }

    // Clear the queue
    clear(){
        this.queueArray = [];
        this.length = 0;
        this.front = 0;
        this.rear = -1;
    }

    // Checks whether the queue is full
    isFull(){
        return this.length == this.maxSize;
    }

    // Get length of the queue
    getSize(){
        return this.length;
    }

    // Get peek element of the queue
    getPeek(){
        if(this.isEmpty()){
            return "Queue is empty"
       }else{
        return this.queueArray[this.rear % this.maxSize] ;
       }
        
    }

    // Get the front element
    getfront(){
        if(this.isEmpty()){
             return "Queue is empty"
        }else{
            return this.queueArray[(this.front) % (this.maxSize)];
        }
        
    }

    // Add element to the queue
    enqueue(element){
        if(this.isFull()){
            console.log("The queue is full");
        } else {
            // Add element to the next position on the rear side
            
            let index = (this.rear + 1) % this.maxSize;
            this.queueArray[(this.rear + 1) % this.maxSize] = element;
            this.rear++;
            this.length++;
        }    
    }

    printElements(){
        if(this.isEmpty()){
            return "The queue is empty";
        }else{
            return this.queueArray.filter(elem =>{
                
            });
        }
        
    }

    // Remove elements from the queue
    dequeue(){
        if(this.isEmpty()){
            console.log("The Queue is empty");
        } else{
            // Set the element to
            this.queueArray[this.front % this.maxSize] = null;
            // Since the dequeue opertation is done at front, to deregister the
            // first element, set front = front+1
            this.front++;
            // Reduce the length by one
            this.length--;
        }
    }
}

let myCircularQueue = new CircularQueue(5);

myCircularQueue.enqueue(10);
myCircularQueue.enqueue(20);
myCircularQueue.enqueue(30);
myCircularQueue.enqueue(40);
myCircularQueue.enqueue(50);


console.log(`Get the size of queue : ${myCircularQueue.getSize()}`);
console.log(`Is the queue empty? : ${myCircularQueue.isEmpty()}`);
console.log(`Is the queue full? : ${myCircularQueue.isFull()}`);
console.log(`Get the front element : ${myCircularQueue.getfront()}`);
console.log(`Get the peek element : ${myCircularQueue.getPeek()}`);
console.log(`Print the elements ${myCircularQueue.printElements()}`);
console.log("-------------------------------------------------");

myCircularQueue.dequeue();
myCircularQueue.dequeue();
myCircularQueue.dequeue();

console.log(`Get the size of queue : ${myCircularQueue.getSize()}`);
console.log(`Is the queue empty? : ${myCircularQueue.isEmpty()}`);
console.log(`Is the queue full? : ${myCircularQueue.isFull()}`);
console.log(`Get the front element : ${myCircularQueue.getfront()}`);
console.log(`Get the peek element : ${myCircularQueue.getPeek()}`);
console.log(`Print the elements ${myCircularQueue.printElements()}`);
console.log("-------------------------------------------------");