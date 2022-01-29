let binaryNumber = [];

let convertToBinary = (decimalNumber) => {
    if(decimalNumber === 0 || decimalNumber === 1){
        return binaryNumber.unshift(decimalNumber);
    }

    let remainder = decimalNumber % 2;
    if(remainder === 1){
        decimalNumber -= 1;
        binaryNumber.unshift(remainder);
    } else{
        binaryNumber.unshift(remainder);
    }
    
    return convertToBinary(decimalNumber / 2);
}

convertToBinary(201);
console.log(binaryNumber.join(""));