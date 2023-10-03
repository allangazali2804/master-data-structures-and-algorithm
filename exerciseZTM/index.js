function findPair(array, sum){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] + array[j] === sum){
                return[i,j];
            }
        }
    }
}

console.log(findPair([1,4,2,3], 6)); //[1, 2]