// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree -- In order using recursive


// Create a tree node
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let resultArray = [];
const depthFirst = (root) =>{
    if (!root) return [];
    depthFirst(root.left);
    resultArray.push(root.value);
    depthFirst(root.right);
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

depthFirst(a);
console.log(resultArray);