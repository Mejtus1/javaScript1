//Javascript is language of the internet, it wouldn't be possible to use dropdown menus or functions without it, we use him every day
//Javascript is used for frond-end, back-end and mobile apps with react
//javaScript is so common it is almost everywhere and its hard to replace it because it is used more than 25 years, it is the only language used in web development thats what makes it so popular.

//Introduction to programming
//Computer program is a series of specific instructions that tell a computer what to do in specific circumstances and they are written to do a specific set of tasks
//Programming is simply a process of writing a steps a computer needs to take to complete a certain task
//Programming language is like a bridge that facilitates communication between computers and people
//for a computer to understand a programming language it needs to save it somwhere on RAM or 0s and 1s on a disk in binary. After that the CPU can comprehend these binary electrical signals
//there are:
//Low level languages (closer to 0s and 1s)
//High level languages (needs to be converted to 0s and 1s)

//Variables
//you can access console by pressing f12 on windows and linux
//we can type "John" name in a javascript and it will log it to the console, but if we want to reuse it in the future, we use variables
var person = "John"; // variable declaration
//for outputting values in javascript we use console.log METHOD
console.log("Hello ", person);
var greeting = "Hello";
console.log(greeting, person);
//we can reasign variables
greeting = "hi"; //reasigned variable
console.log(greeting, person);

//Data types
//sorting and labeling
//we have 7 data types in javascript
// String, Number, Boolean, Null, Undefined, Bignlt, Symbol
// Data = collective term for the values or information within app
//String = text value
"Hey"
//Number = numerical value
375 = //numerical value(number data type)
//Boolean
true / false
//variable not containing a value
Null //represents the absence of value
Undefined //variable not assignet a value
//ES6 introduced 2 new data types
BigInt //data type that accomodates a greater range of numbers
Symbol // data type used as unique identifier

//Operators
//operators are used to perform operations on variables and values
= // assigment operator
+ // addition
- // subtraction
/ // division
* // multiplication

// Logical operators
&& // (AND) Checks both conditions to be true (a>5&&a<10)
|| // (OR) Checks if at least one of the conditions is true (a>5||a>10)
! // Returns opposite value of true /false !(a>5)

//Number
//Number represents numbers and decimal values
12345
12.456
4-2 // minus
2+2 // plus
4*4 // multiplication
16/4 // division
10**2 // to the power of 2 (exponential operator)
9%8 (modulous operator)how many times we can fit one number into the another and than the remained
16%8 //returns 0
//javascript follows standard mathematical sequences
2*4+8 // 16
2*(4+8) // 24

//Strings
//collection and sequence of characters enclosed in single or double quotes ('' "")
"Hey"
'Hey'

//Booleans
1 < 2 //true
1 > 2 //false
1 == 2 //false
var eng = 10;
eng > 2 //true
//by using double equality operator we are looking only for value not data type
100 == "100" //true
// by using stric equality operator
100 === "100" //false
//because of other data type
1 != 1 // false because it is not false of true that 1 is not 1
1 !== "1"; //strict inequality operator (returns true) - because number 1 is not the same as string 1

//Writing statements
//conditional statements
//if statement (checks a condition and will execute a code block if the condition is true)
if (condition == true) {
  //Execute code
} else {
  //Execute code
}
//we can use operators in if statement (==, >, <, !=)
var result = 50;
if (result > 40) {
  console.log("Congratulations you passed");
} else {
  console.log("You didnt't make it");
}
//We can test multiple conditions
var food = "hot";
if (food == "hot") {
  console.log('Too hot')
} else if (food == "cold") { //we use else if statement for other options
  console.log('Too cold')
} else {
  console.log('Just right')
}

//Working with conditional statements  (When to use ELSE IF statement and when to use SWITCH statement)
var place = "first";

if (place == "first") {
  console.log("Gold")
} else if (place == "second"){
  console.log("Silver")
} else if (place == "third"){
  console.log("Bronze")
} else {
  console.log("no medal")
}

//switch statement
switch(place){
case "first";
console.log("Gold");
break;
case "second";
console.log("Silver");
break;
case "third";
console.log("Bronze");
break;
default:
console.log("No medal");
}
//Both of the code examples function the same with only difference


//Looping constructs
//loops work quite a similarly to if else statements but we use them when we want to run code until a certain condition is met
//Counter in javascript can be any variable or any number, but it is common use to use letter i
//example of normal log method and for loop method
console.log(1);
console.log(2);
console.log(3);
//we can count like this but it would be less effecient higher number we need
for (var i = 1, i<4, i++){
console.log(i);
}
//there are for, white and nested loops
//for loop - loops a block of code for a certain number of times
//in a for loop, a counter variable must be set (i = ...), then a condition must be specified (i < 12), the counter must be incremented (i++/i--)
//while loop - is similar to the for loop, it will run until the condition returns true
var i = 2
//The start counter is set outside of the while loop
while (i < 4) {
  console.log()
}

//for loops
//count to 3 and sa go:
console.log(1);
console.log(2);
console.log(3);
console.log("Go");

//increment for
for (var i = 1; i <= 3; i++) {
  console.log(i);
}
console.log("Go");

//decrement for
for ( var i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Hold");

//while loops
//while loop is quite similar to the for loop 
var counter = 3;
while (counter > 0) {
  console.log(counter);
  counter = counter - 1;
}
 
//nested loops 
//they are used to perform more than one task at the same time 
//in javascript we can nest loops inside other loops 
//practical example of nested loop (two week plan from monday to friday)
for (var i = 1; i <= 2; i++) { //first loop loops over the weeks

  for (var j = 1; j <= 5; j++) { //second (nested) loop loops over the days 
      console.log("Week " + i + " day " + j)
  }
}
//the more nested loops there are the slower  the code will run



//Functions 
//functions take several lines of codes and perform a set of related actoins 
//and group them together, you can invoke a function (run it later)
function addTwoNumbers() {
//code that runs inside a function 
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
addTwoNumbers(); //we invoke the function like this 

//to make function more usable we dont have to specify values like in the example above
function addTwoNums(a,b) { //values are placed inside function definition (a,b)
  var c = a + b;
  console.log(c);
}
addTwoNums(2,2);
addTwoNzms(4,7); //function can b reused as many times as we need 



//Storing data in Arrays 
//they are used to store and rearange sequenced collection of items 
var train1 = ["wheat", "barley", "potato", "salt", "rocks"]
/* values         0        1         2        3       4          */
//arrays signal that the assigned values are all part of a group
//values are set in specific sequence
//each one can be accessed through it specific number 



//Objects 
var storeSalesperson = {} //objects are inside curly braces
                          //this creates an empty object literal 

var storeManager = {} //empty object literal
//lets say we want to create variable traits for storeManager
//we can create object traits using . (dot) operator 
storeManager.rangetilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.greeting = "Lets make some money";

//we can create object notation using curly brackets
var assistantManager = { //we created an object 
  movement: 3, //and assigned some values to its properties
  socialSkills: 30,
  streetSmarts: 30,
  health: 40
}

socialSkills = 50;
/*Variable name    Variable value                                  */
    socialSkills = 50;
/*Property key     Property value                                  */
//They then become key value pairs 




//MATH OBJECT
//mostly used to generate random number between 0 and 0.99
// Generate a decimal number between 0 and 0.99
Math.random(); //method

// Save it to a variable: 
var decimal = Math.random();

// Log the value of decimal to the console
console.log(decimal);

// Log the value of decimal MULTIPLIED by 100 (we get normal number between 1 and 99)
console.log(decimal * 100);

Math.cell(); //method - is used to round up ecimal to the nearest integer
var rounded = Math.ceil(0.0001); // 1 
var roundedd = Math.ceil(0.5); // 1 
var roundeddd = Math.ceil(1.01); // 2 
var roundedddd = Math.ceil(2.99); // 3 

var decimaal = Math.random() * 10; // random method randomly generates number between 0,1 and 10
var roundeed = Math.ceil(decimal); // ceil method rounds up to the nearest integer
console.log(rounded); //console outputs our number 




//STRINGS (FURTHER EXPLAINED)
//Iterable = any data type that can be iterated over using a FOR OF loop

//you can run a for loop over an array of letters and output the result 
var lettters = ['a', 'b', 'c'];
for (var i=0; i<letters.length; i++) {
  console.log(letters[i]);
} //outputs a, b, c 

//additionaly you can run a for loop over a string 
//loop over a string abc to output a letters individually 
var letters = "abc";
for (var i=0; i<letters.length; i++) {
  console.log(letters[i]);
} //outputs a, b, c 

//Iterable arraays (they can be itterated over by a for loop)
var veggies = ['onion', 'parsley', 'carrot']; 

console.log(veggies.length); //outputs number of array items = 3

console.log(veggies[0]); //array index zero = onion
console.log(veggies[1]); // parsley

for (var i = 0; i < veggies.length; i++) { //veggies.length = 2, if i < than 2 run for loop
  console.log(veggies[i]); 
} //we iterated over items in the array with for loop which MEANS ITS ITTERABLE


//Iterate over strings (they can be)
var greeting = 'Howdy';
console.log(greeting.length); //5

console.log(greeting[0]); //H
console.log(greeting[1]); //o

for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]); //outputs H o w d y 
}
//despice the simmilar display strings ARE not arrays 
//We will see it more closely in this example 
var greet = "Hello";
var user = "Lisa";

console.log( greet.pop() ); //method outputs error, (array method)

console.log( greet + user ); // Hello Lisa 

console.log( greet.concat(user) );//Concat method accepts whatever variable i want to concat (join)

//both method and + operator can be used in arrays and in strings 




//Typeof operator (idenfiy data types in javascript)
//To use it type typeof
var test = typeof("What is this?") //string 
var test2 = typeof(10);            //number 
var test3 = typeof(3.14);          //number 
var test4 = typeof(true);          //boolean 
var test5 = typeof(1 < 2)          //boolean
var test6 = typeof({ firstProperty: 1}) //object




//Introduction to functional programming 



//De-structuring arrays and objects 
//to illustrate destructuring imagine an object which than 
//become independent of the original but was at the start copy of the original
//example: copy folder 
let {PI} = Math; //PI property exists on Math object 
PI;
//we can only destructure something that only exists on an object
let {pi} = Math;
pi; //returns undefined 
//we can evaluate the PI object with Math.PI which results in true 
PI === Math.PI;
//we update PI 
PI = 1;
PI === Math.PI //boolean returns false because we changed
//THE DESTRUCTURED VARIABLE which is now PI = 1, the source
//property of an object is still 3.14..... 

const car2 = {
  speed: 200,
  color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
//Object keys METHOD returns key value pair names = speed color

const car3 = {
  speed: 300,
  color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
//Object.values method returns key value pair properties = 300, yellow 

const car4 = {
  speed: 400,
  color: 'magenta'
}
console.log(Object.entries(car4));
//Object.entries() method returns an array listing both the keys and the values.
//returns [ ['speed', 400], ['color', 'magenta'] ]



//For of and for in prototype loops on objects
//For in loop runs over all objects values (prototypes)
//For of loop runs over specified object value (prototype)

const car = {
  engine: true
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

for (prop in sportsCar) { 
  console.log(":P", prop);
} //Displays speed, engine (engine belongs to the protoype of the car object not the sportscar object itself)
//outputs properties of the sportscar and original object properties too
for (prop of Object.keys(sportsCar)) {
  console.log(":P", prop + ": " + sportsCar[prop]);
} //outputs only the properties of keys of sportscar 

