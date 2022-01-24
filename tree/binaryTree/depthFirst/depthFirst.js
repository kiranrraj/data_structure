// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree -- Depth First


// Create a tree node
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const depthFirst = (root) =>{

    // Return an empty array if the root is null
    if (!root) return [];
    const stack = [root], resultArray = [];

    while(stack.length > 0){

        // Get the last element from the stack
        const current = stack.pop();

        // Add the popped element into the result array
        resultArray.push(current.value);

        // Push the right and left elements in the stack
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return resultArray;
};

// Create nodes
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

// Adding nodes to the parent
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let result = depthFirst(a);
console.log(result);