var numIdenticalPairs = function(nums) {
    let goodPairs = ""
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j] && i < j){
                goodPairs ++;
            }
        }
    }

    return goodPairs;
};