// Creation Date: 18/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Linked List


class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    // Check if the linked list is empty
    isEmpty(){
        return this.head === null;
    }

    // Get the length of the linked list
    getLength(){
        let position = 0;
        let head = this.head
        // The loop loops until the head is not equall to null and on 
        // each loop the value of position is incremented by one.

        if(this.isEmpty()) return 0;

        while(head.next != null){
            position++;
            head = head.next;
        }
        return position + 1;
    }

    insertData(data){

        // If no data is provided
        if (!data) return `Enter a value for data`;

        // Create a new node
        let newNode = new Node(data);
        let current = this.head;

        // If the node is empty
        if(this.isEmpty()){

            // Point head to the new node
            this.head = newNode;
        }else{
            
            // Loop until you find the last node
            while(current.next != null){

                // Condition for the loop to find the next element
                current = current.next;
            }

            // Set the final node's next to the new node
            current.next = newNode;
        }

        return this.printElements();
    }

    removeData(){

        // If the node is empty
        if(this.isEmpty()){

            return `The linked list is empty`;
        }else{

            let head = this.head;
            
            // Loop until you find the penultimate node
            while(head.next.next != null){

                // Condition for the loop to find the next element
                head = head.next;
            }

            // Set the penultimate node's next to null, so that the linked list
            // will not have any link to the last element
            head.next = null;
        }

        return this.printElements();
    }

    printElements(){

        let elements = [];
        let current = this.head;

        while(current != null){
            elements.push(current.data);
            current = current.next;
        }

        return elements;
    }
}

let newLL = new LinkedList();

console.log("--------------------------------------");
console.log(`Is the list empty?: ${newLL.isEmpty()}`);
console.log(`Elements after insertion ${newLL.insertData(10)}`);
console.log(`Length of the list: ${newLL.getLength()}`);
console.log(`Is the list empty?: ${newLL.isEmpty()}`);
console.log(`Elements: ${newLL.printElements()}`);

console.log(`Elements after insertion ${newLL.insertData(20)}`);
console.log(`Length of the list: ${newLL.getLength()}`);
console.log(`Is the list empty?: ${newLL.isEmpty()}`);
console.log(`Elements: ${newLL.printElements()}`);

console.log(`Elements after insertion ${newLL.insertData(30)}`);
console.log(`Length of the list: ${newLL.getLength()}`);
console.log(`Is the list empty?: ${newLL.isEmpty()}`);
console.log(`Elements: ${newLL.printElements()}`);

console.log(`Elements after insertion ${newLL.insertData(40)}`);
console.log(`Elements after insertion ${newLL.insertData(50)}`);
console.log(`Elements after insertion ${newLL.insertData(60)}`);
console.log(`Length of the list: ${newLL.getLength()}`);
console.log(`Is the list empty?: ${newLL.isEmpty()}`);
console.log(`Elements: ${newLL.printElements()}`);

console.log(`Elements after deletion: ${newLL.removeData()}`);
console.log(`Elements after deletion: ${newLL.removeData()}`);
console.log(`Elements after deletion: ${newLL.removeData()}`);
console.log(`Elements after deletion: ${newLL.removeData()}`);
console.log(`Length of the list: ${newLL.getLength()}`);
console.log(`Is the list empty?: ${newLL.isEmpty()}`);
console.log(`Elements: ${newLL.printElements()}`);