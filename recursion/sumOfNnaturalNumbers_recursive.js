

// Sum of Natural Numbers Formula n(n+1) / 2

let sumOfNumbers = (number, sum = 0) =>{
    if(number === 0) return sum;
    sum += number;
    return sumOfNumbers(number-1, sum);
}

console.log(sumOfNumbers(10, 0));
console.log(sumOfNumbers(100, 0));
console.log(sumOfNumbers(55, 0));

let sumOfNumbers2 = (number) => {
    if(number <= 1) return number;
    return number + sumOfNumbers2(number - 1); 
}

console.log(sumOfNumbers2(10, 0));
console.log(sumOfNumbers2(100, 0));
console.log(sumOfNumbers2(55, 0));