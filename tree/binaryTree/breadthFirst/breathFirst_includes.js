// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree -- Breadth First
// Usage        : Search for a value using recursive function

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const breadthSearchIncludes = (root, search) =>{

    if (!root) return [];
    const queue = [root];

    while(queue.length > 0){
        const current = queue.shift();
        if(current.value === search) return true;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right); 
    }
    return false;
};

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let result = breadthSearchIncludes(a, 'e');
console.log(`Found e ? ${result}`);

result = breadthSearchIncludes(a, 'h');
console.log(`Found h ? ${result}`);