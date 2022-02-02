function mergeSort(arr1, arr2){
    
    if (arr1 === undefined || arr2 === undefined) return;
    if (arr1.length === 0 ) return arr2;
    if (arr2.length === 0 ) return arr1;
    let mergedArray = [], i = 0, j = 0;
    let item1 = arr1[i], item2 = arr2[j];
    

    while(item1 !== undefined && item2 !== undefined){
        if(item1 < item2){
            mergedArray.push(item1)
            i++;
            item1 = arr1[i];
            
        } else {
            mergedArray.push(item2)
            j++;
            item2 = arr2[j];
        }
    }

    function addRemainingArray(arr, length, merge){
        if(length !==0){
            for(let i=length; i< arr.length; i++){
                merge.push(arr[i]);
            }
        }
    }
    console.log(i, j)
    addRemainingArray(arr1, i, mergedArray);
    addRemainingArray(arr2, j, mergedArray);

    return mergedArray;
}

console.log(mergeSort([0, 3, 4, 31], [4, 6, 30, 40, 50, 52]));