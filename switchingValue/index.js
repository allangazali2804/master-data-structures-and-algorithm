/*Given the existing code below, can you write some code so that their values are switched around?
var a = "3";
var b = "8";
So that the variable a holds the value "8".
And the variable b holds the value "3".
When the code is run, it should output:
a is 8
b is 3
Do NOT change any of the existing code.
You are NOT allowed to type any numbers.
You should NOT redeclare the variables a and b.
*/

function test() {
    var a = "3";
    var b = "8";
/***********Do not change the code above 👆*******/
//Write your code here:
    // First, we need to create a new container which can contain value from existing container, namely c.
    var c = a;
    // Since the value of container a is transmitted to container c, then it is now empty and we can transmit b's value to a
    a = b;
    // and so on.
    b = c;


    
/***********Do not change the code below 👇*******/
    console.log("a is " + a);
    console.log("b is " + b);
}

test(); // a is 8. b is 3.
