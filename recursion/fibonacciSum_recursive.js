let fibonacci = (num) =>{
    if(num === 0 || num === 1) return num;
    return fibonacci(num - 1) + fibonacci (num - 2);
}

console.log(fibonacci(12));
console.log(fibonacci(15));