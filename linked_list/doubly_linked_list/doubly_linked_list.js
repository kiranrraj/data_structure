class Node{
    constructor(data){
        this.data = data;
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

    getLength(){
        return this.length;
    }

    isEmpty(){
        return this.length === 0;
    }

    getElement(index){

        if(index < 0 || index >= this.length){

            return -1;

        } else if(index <= Math.floor(this.length/2)){

            let head = this.head;
            let count = 0;

            while(head != null){
                if(count === index){
                    return head;
                }

                head = head.next;
                count++;
            }
        } else if(index > Math.floor(this.length/2)){

            let count = this.length-1;
            let tail = this.tail;

            while(tail != null){
                if(count === index){
                    return tail;
                }

                tail = tail.prev;
                count--;
            }
        }
    }

    setElement(index, value){

        let node = this.getElement(index);
        node.data = value;
    }

    // Insert node at the end
    insertAtEnd(data){

        // create a new node with given data
        let newNode = new Node(data);

        // If the list is empty
        if(this.head === null){

            // Set the head and tail to new node
            this.head = newNode;
            this.tail = newNode;
        } else {

            // If the list is not empty
            // Set the next of the current tail to the new node
            this.tail.next = newNode;

            // Set the new node's prev to current tail
            newNode.prev = this.tail;

            // Set new tail which points to the new node
            this.tail = newNode;
        }

        // increment the length by one as new node is inserted to the list
        this.length++;
    }


    // Insert node at the front
    insertAtFront(data){

        // create a new node with given data
        let newNode = new Node(data);

        // If the list is empty
        if(this.head === null){

            // Set the head and tail to new node
            this.head = newNode;
            this.tail = newNode;
        } else {

            // set the prev of previous element to new node.
            this.head.prev = newNode;

            // Set the next of new node to previous first element
            newNode.next = this.head;

            // Set the head into newNode
            this.head = newNode;
        }

        // increment the length by one as new node is inserted to the list
        this.length++;
    }


    insertAtPosition(data, position){

        // If any of the value is not provided
        if(data === undefined || position === undefined) return `Please enter data and position 
        \nYour response Data: ${data}  Position: ${position}`;

        if(position < 0 || position >= this.length) return `Index out of bound, Allowed max siz:
        ${this.length-1}\nYour response Data: ${data}  Position: ${position}`

        // If position is zero that means, insert at front, call inserAtFront function.
        if(position === 0) return this.insertAtFront(data);

        // If position is length-1 that means, insert at end, call inserAtEnd function.
        if(position === this.length - 1) return this.insertAtEnd(data);

        let newNode = new Node(data);

        // Get the element before the specified position.
        let beforeNode = this.getElement(position - 1);

        // Get the node at the specified position.
        let afterNode = beforeNode.next;

        // Set the next of the element before the specified position
        // to the new node
        beforeNode.next = newNode;

        // Set the prev of an element, the element is one that comes 
        // after the specified position. 
        afterNode.prev = newNode;

        // Set the prev and next of new node
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        
        // Increment the length as new node is added to the list.
        this.length++;

    }

    // Remove node from the end
    removeFromEnd(){

        // to return the removed element we save it in a variable
        let currentTail = this.tail;

        // If the list is empty
        if(this.head === null){
            return `The list is empty`;

        // If the list contains only one element
        } else if(this.length === 1 ){
            
            // Set the next and tail to null
            this.tail = null;
            this.next = null
        } else{

            // Set the tail to be previous tails's prev value so that
            // the tail get updated, the last element will be removed 
            // as nothing from the list points to the element. 
            this.tail = currentTail.prev;

            // Set the tail's next to be null as it is the last element 
            //  in the list
            this.tail.next = null;

            // To remove any pointer that points the the list
            currentTail.prev = null;
        }

        // decrement the length by one as one element is removed from the list
        this.length--;

        return currentTail.data;
    }

    // Remove node from the front
    removeFromFront(){

        // to return the removed element we save it in a variable
        let currentHead = this.head;

        // If the list is empty
        if(this.head === null){
            return `The list is empty`;

        // If the list contains only one element
        } else if(this.length === 1 ){
            
            // Set the next and tail to null
            this.tail = null;
            this.next = null
        } else{

            // Set the head to be current head's next value so that
            // the head get updated, the first element will be removed 
            // as nothing from the list points to the element. 
            this.head = currentHead.next;
            
            // Set the tail's next to be null as it is the last element 
            // in the list
            this.head.prev = null;

            // To remove any pointer that points the the list
            // currentHead.prev = null;
            currentHead.next = null;
        }

        // decrement the length by one as one element is removed from the list
        this.length--;

        return currentHead.data;
    }

    removeFromPosition(position){

        // If any of the value is not provided
        if( position === undefined) return `Please enter a value`;

        if(position < 0 || position > this.length) return `Index out of bound`;

        // If position is zero that means, insert at front, call removeFromFront function.
        if(position === 0) return this.removeFromFront();

        // If position is length-1 that means, insert at end, call removeFromEnd function.
        if(position === this.length - 1) return this.removeFromEnd();

        // Get the element at the specified position.
        let nodeToRemove = this.getElement(position);

        // Get the node before at the specified position.
        let beforeNode = nodeToRemove.prev;

        // Get the next element after the specified position
        let afterNode = nodeToRemove.next;

        // Set the next of the element before the specified position and 
        // prev of element after the specified position with values so as to
        // deregister the element at the specified position. 
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        // Set the prev and next pointers of the element at the specified 
        // position to null, so as the element will not have any link to the list
        nodeToRemove.prev = null;
        nodeToRemove.next = null;
        
        // Decrement the length as a node is removed from the list.
        this.length--;
        return nodeToRemove.data;
    }


    printElements(){
        let current = this.head;
        let elementsArray = []
        if(this.head == null) return "The list is empty";
        while(current != null){
            elementsArray.push(current.data)
            current = current.next;
        }
        return elementsArray;
    }

    getValueAtPosition(position){
        let result = this.getElement(position);
        if (result === -1){
            return `Index out of bound`
        } else{
            return result. data;
        }
    }
    
}

let doublyLL = new DoublyLinkedList();
console.log(`Is list empty? ${doublyLL.isEmpty()}`);

doublyLL.insertAtEnd(10);
doublyLL.insertAtEnd(20);
doublyLL.insertAtEnd(30);
doublyLL.insertAtEnd(40);
doublyLL.insertAtEnd(50);
doublyLL.insertAtEnd(60);
doublyLL.insertAtEnd(70);
doublyLL.insertAtEnd(80);
doublyLL.insertAtFront(-10);
doublyLL.insertAtFront(-20);
doublyLL.insertAtFront(-30);
doublyLL.insertAtFront(-40);
doublyLL.insertAtFront(-50);
doublyLL.insertAtPosition(100, 0);
doublyLL.insertAtPosition(200, 1);
doublyLL.insertAtPosition(300, 13);
doublyLL.insertAtPosition(300, 12);


console.log(`--------------------------------------------------`);
console.log(`Elements are: ${doublyLL.printElements()}`);
console.log(`Length of the list is ${doublyLL.getLength()}`);
console.log(`Element at index 4 :- ${doublyLL.getValueAtPosition(4)}`);
console.log(`Element at index 7 :- ${doublyLL.getValueAtPosition(7)}`);
console.log(`Element at index 0 :- ${doublyLL.getValueAtPosition(0)}`);
console.log(`Element at index 10 :- ${doublyLL.getValueAtPosition(10)}`);
console.log(`Element at index 13 :- ${doublyLL.getValueAtPosition(13)}`);


console.log(`--------------------------------------------------`);
console.log(`Elements are: ${doublyLL.printElements()}`);
console.log(`Length of the list is ${doublyLL.getLength()}`);


console.log(`--------------------------------------------------`);
console.log(`Element removed from end: ${doublyLL.removeFromEnd()}`);
console.log(`Element removed from end: ${doublyLL.removeFromEnd()}`);
console.log(`Element removed from end: ${doublyLL.removeFromEnd()}`);
console.log(`Element removed from front: ${doublyLL.removeFromFront()}`);
console.log(`Element removed from front: ${doublyLL.removeFromFront()}`);
console.log(`Element removed from front: ${doublyLL.removeFromFront()}`);
console.log(`Elements are: ${doublyLL.printElements()}`);
console.log(`Length of the list is ${doublyLL.getLength()}`);


console.log(`--------------------------------------------------`);
console.log(`Elements are: ${doublyLL.printElements()}`);
console.log(`Element removed from position 1:  ${doublyLL.removeFromPosition(1)}`);
console.log(`Elements are: ${doublyLL.printElements()}`);
console.log(`Element removed from position 2: ${doublyLL.removeFromPosition(2)}`);
console.log(`Elements are: ${doublyLL.printElements()}`);
console.log(`Element removed from position 5: ${doublyLL.removeFromPosition(5)}`);
console.log(`Elements are: ${doublyLL.printElements()}`);
console.log(`Length of the list is ${doublyLL.getLength()}`);
console.log(`--------------------------------------------------`);

console.log(`Is list empty? ${doublyLL.isEmpty()}`);