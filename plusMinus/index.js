/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
*/

function plusMinus(arr) {
    let positive = 0;
    let zero = 0;
    let negative = 0;
    for(let i=0; i < arr.length; i++){
        if (arr[i] > 0){
            positive++;
        }
        else if (arr[i] < 0){
            negative++;
        }
        else if (arr[i] == 0) {
            zero++;
        }
    }
    console.log(positive/arr.length);
    console.log(negative/arr.length);
    console.log(zero/arr.length);
}

plusMinus([4,2,5,0,2])
    