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
//special syntax for assigning values taken from an object to a variabůe
var voxel = {x: 3.6, y: 7.4, z: 6.54 } //object with three elements (x,y,z)
var x = voxel.x; //this is an old way of taking variable from object and 
var y = voxel.y; //assign it a value   
var z = voxel.z;
//for destructuring there is a way to assign variables for each element in an object 
const { x : a, y : b, z : c } = voxel;//destructuring syntax
//here we are creating variables (a,b,c) and assigning them to an object (x,y,z)
//get the field of x and copy ít to the value of a 
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(AVG_TEMPERATURES) { //we are using destructuring of avg_temp object here
    "use strict"; 
    const { tomorrow : tempOfTomorrow } = AVG_TEMPERATURES; //get the tomorrow field from AVG_TEMPERATURES object and assign it to the tempOfTomorrow 
    return tempOfTomorrow; //now we have 
};
console.log(getTempOfTmrw(AVG_TEMPERATURES));

//Destructuring assignment with nested objects .....................

const LOCAL_FORECAST = { 
    today: { min: 72, max: 83 }, //Nested objects (forecast of today)
    tomorrow: { min: 73.3, max: 84.6 } //Nested objects (forecast of tomorrow)
};

function getMaxOfTmrw(forecast) { //we are gonna pass in the forecast, the LOCAL_FORECAST becomes the forecast variable
    "use strict";

    const { tomorrow : { max : maxofTomorrow }} = forecast; //we want to figure of the max of tommorrow
                                    //we are gonna use destructuring to figure that out
    //we set the max that was inside tomorrow to maxOfTomorrow 
    //we use double { because we are going inside nested object 
    return maxofTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));



//Use Destructuring assignment to assign variables from arrays 
const [z, x, , y] = [1, 2, 3, 4, 5, 6]; //we are assigning y to 4 
//the difference between destructuring from arrays and from objects is that we cannot specify which element of the array to go into a variable 
console.log(z, x, y); // we will see 1 2 and 4 

let a = 8, b = 6; //we can use destruturing of arrays to switch a places with a variables 
(() => {
    "use strict";
    [a, b] = [b, a]//we use destructuring to switch places of variables in the array 
})();
console.log(a); //it will log out 6 and 8 
console.log(b); //instead of 8 and 6 




//Use destructuring assignment with the rest operator 
const source = [1,2,3,4,5,6,7,8,9,10]; //source array
function removeFirstTwo(list) {
    const [ , , ...arr] = list; //we remove the first two, by writing two commas with nothing between them 
    //it says do nothing to the first and second element and everything else put into arr variable
    return arr;
}
const arr = removeFirstTwo(source); //we removed first two elements of the array
console.log(arr);
console.log(source); //original source variable





//Use Destructuring Assignment to pass an object as a functions parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half({ max, min }) { //with this function we are only using stats.mox and min
        return (max + min) / 2.0;
    };
})();
console.log(stats); //stats down here is passing whole stats object to the console
console.log(half(stats));





//create strings using template literals 
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
//Template literal with multi-line and string interpolation 
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`; //template litterals = backticks, you can make multiline strings
console.log(greeting);          //another thing is when we see ${person.name} dollar sign that is javascript and we are using 
                                //it makes things easier because YOU CAN PUT VARIABLES RIGHT INTO THE STRINGS 

//we want to return each element in the array as template literal (strings using backticks with variables inside of them)
const result = {
    success: [ , , ...arr]
    failure: [ , , ...arr]
    skipped: [ , , ...arr]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }                           //we are using template litteral with variable inside dollar sign and curly braces 
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);



//Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => { //ES6 added support for easy defining object literals
//function is an arrow function => (name, age, gender) and takes these 3 variables and return and object
    return {
        name: name, 
        age: age, 
        gender: gender
    };

};
console.log(createPerson("Zodiac Hasbro", 56, "male")); //we can use it like this 
//BUT WE CAN MAKE IT MUCH EASIER WAY deleto whole return thing and write it like this 
const createPerson = (name, age, gender) => ( { name, age, gender } );
console.log(createPerson("Zodiac Hasbro", 56, "male"));



//Write Concise Declarative Functions 
const bicycle = { //an object can own a function 
    gear: 2,
    setGear(newGear) { //this is a  way of putting a function inside a object
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);



//Use class Syntax to Define a Constructor Function 
var SpaceShuttle = function(targetPlanet){ //this is an older way to create an object
    this.targetPlanet = targetPlanet; //this is a constructor function 
}
var zeus = new SpaceShuttle("Jupiter"); //we can instatiating (constructing) an object SpaceShuttle
console.log(zeus.targetPlanet) //we construct the object with constructor and then create it with new 
//the class syntax replaces 
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet)
