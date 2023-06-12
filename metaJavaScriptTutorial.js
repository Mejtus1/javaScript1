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

