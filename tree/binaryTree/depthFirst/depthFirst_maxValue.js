// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree -- Depth First 
// Usage        : Find the maximum value in the tree.  

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const depthFirstMin = (root) =>{

    let maxVal =  -Infinity;
    if (!root) return maxVal;
    let stack = [root];

    while(stack.length > 0) {
        const current = stack.pop();
        if(maxVal < current.value) maxVal = current.value;
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }

    return maxVal;
};

let node1 = new Node(10);
let node2 = new Node(1030);
let node3 = new Node(5);
let node4 = new Node(16);
let node5 = new Node(201);
let node6 = new Node(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

let result = depthFirstMin(node1);
console.log(result);