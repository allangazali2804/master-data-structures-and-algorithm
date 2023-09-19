var numberOfEmployeesWhoMetTarget = function(hours, target) {
    var metTarget = "";
    for(let i = 0; i < hours.length; i++){
        if(hours[i] >= target){
            metTarget++;
        }
    }

    return metTarget;
};