var smallerNumbersThanCurrent = function(nums) {
    var smallerArray = [];
    
    for(let i = 0; i < nums.length; i++){
        var sum = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[i] > nums[j]){
                sum++;
            }
        }
        smallerArray.push(sum);
    }
    
    return smallerArray;
};