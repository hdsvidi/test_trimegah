const input = ['cook', 'save', 'vase', 'aves', 'taste', 'state', 'map']

function sortString(str){
    let arr = []
    for (let i = 0; i < str.length; i++){
        arr[i] = str[i]
    }
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){

        if(arr[i] > arr[j]){
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    }
    let stringSort = ''
    for (let i = 0; i < arr.length; i++){
        stringSort += arr[i]
    }
    return stringSort;
}

let arrSortString = [];
for (let i = 0; i < input.length; i++) {
    arrSortString[i] = sortString(input[i])
}

let result = [];
let skipIndex = [];
let index = 0;
let index2 = 0;
let reachedIndex = 0;
let skip;
let index3 = 0;
for (let i = 0; i < arrSortString.length; i++) {
    result[index] = [];
    index2 = 0;
    index3 = 0;
     for (let k = 0; k < skipIndex.length; k++) {
        if (i === skipIndex[k]) {
            skip = true;
            break;
        } else 
            skip = false;
        
    }
    if (skip) continue;
    for (let j = i; j < arrSortString.length; j++){
        if (arrSortString[i] === arrSortString[j]) {
            result[index][index2] = input[j];
            index2++;
            skipIndex[index3] = j;
            index3++;
        }
    }
    
   
    index++;
}


console.log(result)
