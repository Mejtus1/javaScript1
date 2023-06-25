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
//computer languages have multiple programming paradigms 
//Functional programming and Object Oriented Programming 
//There is a clear destinction between functions and data in functional programming 
var shoes = 100; //data 
function totalPrice(price, tax) { //Functions 
return price * tax;
}
//When functions need some data, you passed in the values in the forms of arguents
var ToPay = totalPrice(shoes, stateTax);

//Practucal implementation of functional programming 
var currencyOne = 100;
var currencyTwo = 0;    //this is functional programming 
var exchangeRate = 1.2; //separating data from functions 

function covertCurrency(amount, rate) { //separated functions 
  return amount * rate;
}
currencyTwo = covertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);


//Function calling and recursion 
/* Functions that repeat tasks are helpful unless they run endlessly 
Recursive functions (to avoid infinite loop) */
function example() {
  console.log("line one");
  console.log("line two");
  console.log("line three");
}

function example() {
  console.log("line one");
  console.log("line two");
  console.log("line three");
  example(); //this will repeat in an infinite loop 
}
//function using RECURSION 
let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return; //in this function it will log the numbers 3 2 1 
  example(); //when a function call itself this is what is known as recursion 
} //recursion is an alternative way to run repetetive code without the use of loops 




//SCOPE 
//the code that exists outside of the function is a global scope 
//and all the code inside of a function is refferd to as local scope 

var num1 = 1; //global scope 

function score() { //local scope 
 var num2 = 20;
 console.log(num2);
}

//.........................................................................................................//
//Scoping with var, let and const 
//ES6 introduced block scope (block scope is used using let and const)
//they become immediatly to the code block they were created in
let color = "red"; //Global variable
if (color == "red") { //Two separate variables with the same name 
    let color == "blue" 
} //Block scope curly braces, variables can be accessed only inside their scope

var 
//var can be used before it is declared
//same variable can be redeclaerd
//can be scoped to a function or globally 
var user = "Victoria";
var user = "Viki"; //redeclared without errors 

let 
//we cannost access let variable before we declare it 
let 
//we cannost declare an unassigned variable with let
let user;
//we cannot redeclare a variable 
let user = "Vicky";
let user = "Victoria";
//we can reaassign it 
let user1 = "Victoria";
user1 = "Victoria1";

const 
//const must be initialized 
//cannot be accessed before initialization 
//cannot be redeclared


//.........................................................................................................//
//Object Oriented Programming 
//Organizing programs using objects to group related data and functionality 

//in OOP we create and object and store all data including data, variables and functions
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function() { //FUNCTIONS INSIDE OBJECTS ARE KNOWN AS METHODS 
    var calculation = purchase1.shoes * purchase1.stateTax;
    console.log("Total price:", calculation);
  }
}
//you can access the totalPrice method on purchase1 object using the dot (.) notation 
purchase1.totalPrice; //we can access totalPrice data
purchase1.stateTax;   //and stateTax data

//We can make as many objects as we need 
var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function() { //It can be seen that both methods in these objects are almost the same 
    var calculation = purchase2.shoes * purchase2.stateTax; //we can do that by this keyword
    console.log("Total price:", calculation);
  }
  //........................................//
  totalPrice: function() { 
    var calculation = this.shoes * this.stateTax; //THIS keyword, it esentially means this object
    console.log("Total price:", calculation);     //since the object is the same in both objects
  }
}
//Rewriting same methods in each object is wasteful 
//We use templates for our methods in this scenario 
//One of the most effective way to build templates in javascript is using classes


//.........................................................................................................//
//CLASSES
//in javascript any class is build using the class keyword, with a name of a car and curly braces
class Car {
  constructor(color, speed) { //constructor function accepts as many parameters as it needs 
    this.color = color;       //the role is to assign the passed in parameters 
    this.speed = speed;       //when instanciating new objects 
  }
  //after the constructor is defined, you add as many methods as you want 
  turboOn() { //YOU DONT USE THE FUNCTION keyword HERE, only the name of the method 
    console.log("turbo is on!")
  }
}
//To access the turboOn method you type car1.turboOn
car1.turboOn();

//continuing to understand constructor
class User { //constructor function is a functian that actually creates objects 
  construcor(email, name){
      this.email = "Vicky@gmail.com"
      this.name = "Ryu";
  }
}
var userTwo = new User("Victoria@gmail.com", "Victoria") //when we call this constructor we are passing these two values
// (email, name) into userTwo, instead of hardcoding it again it makes whole process faster 

var userOne = new User(); //User have a Capital U, that way JS knows to look for class up there
//userOne is a random name we choose
/* the "new" keyword - creates new empty object
                     - sets a value of this to be the new empty object
                     - calls the constructor method */

//Javascript build in object types 
//Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON ...
//Constructor function must be used with a operator (new)

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
} //now we can make as many icecreams as we want 
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}



//.........................................................................................................//
//INHERETANCE 
//Ineritence model involves prototype in javsScript
//Prototype is an object that can hold properties of multiple other objects
var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
}
var eagle1 = Object.create(bird); //we have set the eagle1 variable to bird object 
//and using Object.create method passes (inheritance) to the eagle1 variable
console.log("eagle1: ", eagle1); //eagle1 {} (creates eagle1 object and instanciates properties of bird to eagle1)
console.log("eagle1 has wings:" eagle1.hasWings); //true
console.log("eagle can fly:" eagle1.canFly); //true
console.log("eagle1 has feathers:", eagle1.hasFeathers);

//here we created a eagle2 variable and we have used the bird object as a prototype
var eagle2 = Object.create(bird);
console.log("eagle2 has wings:" eagle2.hasWings); //true
//eagle2 has access to the properties stored on a bird object as its prototype 

var penguin1 = Object.create(bird);
//we want to set can fly = false)
//javascript starts to look for properties on its object, after that on its prototype
//se if we set the penguin canFly to false, it will read it first here and output it
penguin1.canFly = false;



//.........................................................................................................//
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


//.........................................................................................................//
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



//.........................................................................................................//
//.........................................................................................................//
//Working with template literals 
