function mergeSort(arr1, arr2){
    
    if (arr1 === undefined || arr2 === undefined) return;
    if (arr1.length === 0 ) return arr2;
    if (arr2.length === 0 ) return arr1;

    let mergedArray = [];
    while(arr1.length !==0 && arr2.length !== 0){
        if(arr1[0] < arr2[0]){
            mergedArray.push(arr1[0])
            arr1.shift();
        } else {
            mergedArray.push(arr2[0])
            arr2.shift();
        }
    }

    function addRemainingArray(arr, merge){
        if(arr.length !==0){
            for(let i=0; i< arr.length; i++){
                merge.push(arr[i]);
            }
        }
    }

    addRemainingArray(arr1, mergedArray);
    addRemainingArray(arr2, mergedArray);

    return mergedArray;
}

console.log(mergeSort([0, 3, 4, 31], [4, 6, 30, 40, 50, 52]));