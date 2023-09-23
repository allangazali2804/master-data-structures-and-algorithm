var kidsWithCandies = function(candies, extraCandies) {
    var greatestCandies = 0;
    for(let a = 0; a < candies.length; a++){
        greatestCandies = Math.max(greatestCandies, candies[a]);
    }
    var result = [];
    for(let i = 0; i < candies.length; i++){ 
        if(candies[i] + extraCandies >= greatestCandies){
            result.push(true);
        } else {
            result.push(false);   
        }
    }

    return result;
};