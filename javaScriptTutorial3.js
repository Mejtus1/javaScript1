// Functions 
// Writing reusable code with functions 

function ourReusableFunction() {  // there always need to be the parenthesis ()
    console.log("Hello, World");  // everything inside the curly bracket is run 
}                                 // everything inside function goes insode {} 
ourReusableFunction;              // runs hello world in the console 

// Passing values to funtinos with arguments 
function ourFunctionWithArgs(a, b) {  //we can call a, b anything any words
console.log(a - b);//when this function is called we are gonna input data into it 
}
ourFunctionWithArgs(10, 5); 
//we are here calling the function, and insted of a and b we 
// are passing a values 10 and 5, and it inputs 5 


//-----------------------------------------------------------//
//Global scope and functions 
//scope refers to variables, variables that are assigned outside of the function 
//they can be seen everythere inside whole code 
var myGlobal = 10;

function fun1() {    //it is possible to use variable without the var keyword
oopsGlobal = 5;      //if you use var keyword oopsGlobal variable would be scoped to the function 
}                    // no var = acces everywhere (at least in the browser it depends on the enviroment)

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;  // this variable can be accessed by the funtion too 
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal; //oopsGlobal can be found on global scale 
    }
    console.log(output);
}
fun1();
fun2();

//Local scope and functions 
// Variables which are declared within a function are visible only within the fucntion 

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope(); // function can access the variable set within it and invokes it 
console.log(myVar); //this is not going to work because this variable is local and cannot be accessed globally 

//Global and local scope in functions 
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit()); //returns sweater 
console.log(outerWear); // returns T-shirt 

// Return a Value from a function 
function minusSeven(num) {
    return num - 7;          // return statement, passing a number (num) into it 
}
console.log(minusSeven(10)); // returns 3 

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5)); // returns 25

//Understaing Undefined value returned from a function
var sum = 0;
function addThree() {
    sum = sum +3;
} //if you dont specify a return value a return value is undefined 

//Assignment with a returned value 
var changed = 0;
function change(num) {
return (num + 5) /3;
}
changed = change(10); //value from this function will be returned with this variable assigned 
//example 2. 
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7); //Now processed equals result of this mathematical expression 

//Stand in line 
//Queue is an abstract data structure where items are cemp in order
//old items are taken from the front of the queue and new items are added to the back of the queue 
// this is example for functionality of the queue 
function nextInLine(arr, item) { //you can add an item to the array (arr) 
    arr.push(item);              //we took array and we pushed the item that was passed in 
    return arr.shift();                 //returns first item 
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr)); //shows how array loooks before
console.log(nextInLine(testArr, 6)); // we are calling nextInLine function and we want to pass to our array number 6 
console.log("After: " + JSON.stringify(testArr));
//JSON file is there just to change an array into the string that can be easuky orubted out to the screen 
