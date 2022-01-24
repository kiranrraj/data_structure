// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree -- Depth First 
// Usage        : Find the sum of values in the node using recursive.  

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const depthFirstSum = (root) =>{

    if (!root) return 0;
    return root.value + depthFirstSun(root.left) + depthFirstSun(root.right);
};

let node1 = new Node(10);
let node2 = new Node(100);
let node3 = new Node(5);
let node4 = new Node(16);
let node5 = new Node(21);
let node6 = new Node(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

let result = depthFirstSum(node1);
console.log(result);