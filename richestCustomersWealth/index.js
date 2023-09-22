var maximumWealth = function(accounts) {
    var richCustomer = 0;
    for(var i = 0; i < accounts.length; i++){
        var customersWealth = 0;
        for(var j = 0; j < accounts[i].length; j++){
            customersWealth += accounts [i][j];
        }

        richCustomer = Math.max(richCustomer, customersWealth);
    }

    return richCustomer;
};