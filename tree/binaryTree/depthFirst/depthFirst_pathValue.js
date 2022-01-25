// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree -- Depth First 
// Usage        : Find the path, if we traverse get the maximum total value.  

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const maxPathSum = (root) =>{

    let total = 0;
    if (!root) return -Infinity;
    if(!root.left && !root.right) return root.value;

    const maxPath = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.value + maxPath;
};

let node1 = new Node(10);
let node2 = new Node(130);
let node3 = new Node(5);
let node4 = new Node(16);
let node5 = new Node(21);
let node6 = new Node(337);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

let result = maxPathSum(node1);
console.log(result);