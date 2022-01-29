let functionA = (x) =>{

    if( x=== 10 ){      // Base Case
        return x;
    }

    return functionA( x + 1 ); //Recursive call
}

const valueOfx = functionA(0);

console.log(valueOfx);