let fibonacciSeries = (num) => {
    let count = 0, first = 0, second = 1, next = 0;
    while(num > count){
        console.log(first);
        next = first + second;
        first = second;
        second = next;
        count++;
    }
}

fibonacciSeries(10);
