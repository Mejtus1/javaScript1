//Difference between the var and let keywords 
var catName = "Amy"; 
var catName = "Ashley";     // we can set the var keyword twice 

let dogName = "Laos";
let dogName = "Jack"; // it will log and error, it is generally good
// you dont want to usually declare variable 2 times 
dogName = "Jack" //we cab set it to new variable name, 



//-----------------------------------------------------------------------//
//another useful thing is to "use strict" = a lot of people use it 
//on top of a file or at the beginning of the function 
// to catch a coding mistakes such as not declaring a variable 
function catTalk() {
    "use strict";  // we can see use strict used in top of a function 
    catName = "Oliver";
    quote = catName + " says Meow!";
} catTalk();



// Compare scopes of the var and let keywords 
var = //declared globally, we can access it even outside of functions it was declared in 
let = //declaerd inside a expression scope it was set within 
//let is used because we make sure the variable is defined only inside a scope it is defined in



//Const keyword = a read only variable 
//it has all the features of let but it is read only, it cannot be reasigned 

const 



//---------------------------------------------------------------------------------------//
// Mutate and array declared with const 
const s = [5, 7, 2];
function editInPlace() { 
    "use strict";
    s = [2, 5, 7] //we will get an error = "s is read only"
    //but there is a way to reasign it and that is by reasigning the array 
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
//when we console.log it out we should see the new array [2, 5, 7]



//Prevent object mutation (we can still mutate data or object even when its declared with const )
function freezeObj() {  //there is object.freeze to prevent data mutation 
    "use strict";
    const MATH_CONSTANTS = { //we create MATH_CONSTATNS with PI 
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); //use it whenever you dont want to change, mutate or manipulate data in your object 

    try {
        MATH_CONSTANTS.PI = 99; //Tries what is in the first part of the block
    } catch( ex ) {             //tries to change MATH_CONSTATNS PI to 99
        console.log(ex);        //It failes because of freeze function we applied on our variable 
    }
    return MATH_CONSTATNS.PI;
}
const PI = freezeObj();
console.log(PI);




//Arrow functions 
//use arrow functions to write concise anonymous functions 
var magic = function() { //this is an anonymous function, because it wasnt assigned anywhere
    return new Date();
};

var magic = () => { //this is shortened version of anonymous function above
    return new Date(); //we can shorted it even more 
};

var magic = () => new Date();
//this is full function from before, but it is just really shortened up 

/////////////////////////////////////////////////////////////////////
//Write arrow functions with parameters 
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
// we can get rid of function keyword, curly braces and return 
var myConcat = (arr1, arr2) => arr1.concat(arr2); //this is arrow function from above 
// the arrow functoin will look like this 
console.log(myConcat([1, 2], [3, 4, 5]));

//higher order arrow functions 
//when one function takes another function as an argument, that is good time for an arrow funciton
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => { //this is normal function 
    const sqaredIntegers = arr;
    return sqaredIntegers;
};

const squareList = (arr) => { 
    const sqaredIntegers = arr.filter(num => Number.isInteger(num) num > 0).map(x => x * x);
    return sqaredIntegers;
};

const sqaredIntegers = squareList(realNumberArray);
console.log(sqaredIntegers);

//Write higher order arrow functions 
const increment = (function() {
renturn function increment(number, value = 1) {
    returnnumber + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));


//Use the rest operator with arrow functions 

const sum = (function) { // 
    return function sum(x, y, z) { //its function here taking 3 arguments and summing them 
        const args = [x, y, z]; //at first it takes x, y, z and converts them into an array called args 
        return args.reduce((a, b)) => a + b, 0); // and its reducing them 
    };  //its summing them all up here and than returning the results because it reduces them 
})();
console.log(sum(1, 2, 3));

//this function using rest opperator 
// ... = rest operator
const sum = (function() { 
        return function sum(...args) { //with this rest operator it will convert everything that is passed in into one array and the array is called args
            return args.reduce((a, b) => a + b, 0); 
    };  
})();
console.log(sum(1, 2, 3, 4)); //we can have any number of arguments not just 3

//Use the Spread Operator to evaluate arrays In-place 
//the spread operator looks just like rest operator, but it spreads out an existing array 
const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"]; //spread operator can be used instead of actual array 
//you can only use it in an argument of an function or an array literal 
let arr2;
(function() {
arr2 = arr1 
arr1[0] = "potato" //if we set the array 1 to potato and we log it, the result is potato instead of jan 
})();              //because they are equal, arr1 and arr2 
console.log(arr2);


const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];
let arr2;
(function() {
arr2 = [...arr1]; //it spreads out contents of arr1 into array2, so arr1 is not equal to arr2 
arr1[0] = "potato"  
})();             
console.log(arr2);
//so if we run this there wll be no potato 

//Use Destructuring assignment to assign variables from objectives 
