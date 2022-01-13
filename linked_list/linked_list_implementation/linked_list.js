class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.head == null;
    }

    getLength(){
        return this.length;
    }

    clear(){
        // set the head to null, so all the elements will get deregesterd 
        this.head = null;
        this.length = 0;
    }

    getAt(index){
        let counter = 0;
        let current = this.head;

        // While current not equal to null
        while(current){
            // If counter equal to index return that node
            if(counter === index){
                return current;
            }
            counter++;
            // Current is set to next item of current, 
            // needed for the loop to work
            current = current.next;
        }
        return null;
    }

    insertAtBeginning(data){
        // Create a new node with the data specified by the user
        let newNode = new Node(data);

        // Set the next of the new node with address contained in the
        // current head.
        newNode.next = this.head;

        // Set the head to the address of the new node 
        this.head = newNode;
        this.length++;
        return;
    }

    insertAtEnd(data){
        let newNode = new Node(data);
        let current = this.head;

        // Check if the list is empty
        if(this.isEmpty()){
            // Set the address of new node to the head
            this.head = newNode;
        } else{
            // To find the last element we loop throught the queue
            // checking whether the element's next point to null 
            while(current.next != null){
                current = current.next;
            }
            // Setting the last element's address to the new node
            current.next = newNode;

        }
        this.length++;
    }

    insertAtPosition(data, position){
        // Create a new node with the data specified by the user
        let newNode = new Node(data);
        // If the linked list is empty
        if(this.isEmpty()){
            this.head = newNode;
            // If the position provided by the user is 0
        } else if(position === 0){
            this.head = new Node(data, this.head);
        }else{
            // Get the previous element
            let preElement = this.getAt(position - 1);
            // set the new nodes next to the previous element's next
            newNode.next = preElement.next;
            // set the previous element's next to the new node
            preElement.next = newNode;
        }
        this.length++;
    }

    deleteAtStart(){
        if(this.isEmpty()){
            return "The list is empty"
        } 
        this.head = this.head.next;
        this.length--;
    }

    deleteAtLast(){
        if(this.head == null){
            return "The list is empty"
        }

        let prev = this.head;
        let current = this.head.next;
        while(current.next != null){
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.length--;
    }

    deleteAtPosition(position){

        // If the linked list is empty
        if(this.isEmpty()){
            return "The list is empty";
        // If the position provided by the user is 0
        } else if(position === 0){
            this.head = this.head.next;
        }else{
            // Get the previous element
            let preElement = this.getAt(position - 1);
            if(!preElement || !preElement.next){
                return;
            }
            // set the previous nodes next to the previous element's next element's next
            preElement.next = preElement.next.next;

        }
        this.length--;
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
    
}

let list = new LinkedList();
console.log(`The length of list is : ${list.getLength()}`);
console.log(`Is the list empty? : ${list.isEmpty()}`);
console.log(`Elements of the list: ${list.printElements()}`);
console.log('-------------------------------------');

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(50);
list.insertAtEnd(60);
list.insertAtEnd(70);
list.insertAtEnd(80);
console.log(`Elements of the list: ${list.printElements()}`);
console.log(`The length of list is : ${list.getLength()}`);
console.log(`Is the list empty? : ${list.isEmpty()}`);
console.log('-------------------------------------');

list.deleteAtLast();
console.log(`Elements of the list: ${list.printElements()}`);
console.log(`The length of list is : ${list.getLength()}`);
console.log(`Is the list empty? : ${list.isEmpty()}`);
console.log('-------------------------------------');

list.deleteAtStart();
console.log(`Elements of the list: ${list.printElements()}`);
console.log(`The length of list is : ${list.getLength()}`);
console.log(`Is the list empty? : ${list.isEmpty()}`);
console.log('-------------------------------------');

list.deleteAtPosition(2);
console.log(`Elements of the list: ${list.printElements()}`);
console.log(`The length of list is : ${list.getLength()}`);
console.log(`Is the list empty? : ${list.isEmpty()}`);
console.log('-------------------------------------');

list.insertAtBeginning(0);
console.log(`Elements of the list: ${list.printElements()}`);
console.log(`The length of list is : ${list.getLength()}`);
list.insertAtPosition(100, 0);
console.log(`Elements of the list: ${list.printElements()}`);
console.log(`The length of list is : ${list.getLength()}`);
list.insertAtPosition(100, 3);
console.log(`Elements of the list: ${list.printElements()}`);
console.log(`The length of list is : ${list.getLength()}`);
console.log('-------------------------------------');

list.clear();
console.log(`Elements of the list: ${list.printElements()}`);
console.log(`The length of list is : ${list.getLength()}`);
console.log('-------------------------------------');

list.insertAtEnd(70);
list.insertAtEnd(80);
console.log(`Elements of the list: ${list.printElements()}`);
console.log(`The length of list is : ${list.getLength()}`);
console.log(`Is the list empty? : ${list.isEmpty()}`);
console.log('-------------------------------------');