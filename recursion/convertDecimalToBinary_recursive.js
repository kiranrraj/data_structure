
let convertToBinary = (decimalNumber, result="") => {
    if(decimalNumber === 0) return result;
    // Result should be added after the current remainder
    // so that we don't need to reverse the numbers
    result = (decimalNumber % 2).toString() + result;
    return convertToBinary(Math.floor(decimalNumber / 2), result);
}

console.log(convertToBinary(201));