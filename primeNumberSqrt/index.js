function isPrime(n){
    if(n <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }

    return true;
}

function deretPrima(num){
    const array = [];

    for(let i = 2; i <= num; i++){
        if(isPrime(i)){
            array.push(i);
        }
    }

    return array;
}

deretPrima(100);