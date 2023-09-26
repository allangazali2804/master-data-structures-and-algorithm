var runningSum = function(nums) {
    var runningSum = [];
    var sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        runningSum.push(sum);
    }

    return runningSum;
};