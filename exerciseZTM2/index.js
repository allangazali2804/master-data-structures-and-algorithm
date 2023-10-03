var array1 = ["a", "b", "c", "d"];
var array2 = ["a", "f", "g"];

function inCommon(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return true;
            } else {
                return false;
            }
        }
    }
}

inCommon(array1, array2)