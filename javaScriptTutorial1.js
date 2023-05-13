var //global variable, can be used outside of the scope of assigment 
let // local variable, value can be changed througth code
const // local variable, value cannot be changed (constant)

// Data Types: 
// undefined, null, string, number, symbol, boolean and object 

var a;
var b = 2;
console.log(a)
a = 7;

b = a;

console.log(a)   // with this we can track how our variables are beaing used throughtout our program 

// ----------------------------------------------------------------------------------- // 

var a = 9 // initialized variable 
var b // uninitialized variable 

// ----------------------------------------------------------------------------------- // 
// Declarations 
var StUdyCApvAr; // javascript is case sensitive
var studlyCapVar; // it is general practise to use Camel case - using Capital letter for every new word
// Assigments 
studlyCapVar = 10; 

// ----------------------------------------------------------------------------------- // 
// Adding numbers 
var sum = 10 + 10;
console.log(sum)
// Subraction 
var difference 45 - 33;
console.log(difference)
// Multiplication 
var product = 8 * 10;
console.log(product)
// Divide
var qoutient = 64 / 2;
console.log(qoutient)
// increment a number (adding 1 to it)
var myVar = 87; 
myVar = Myvar + 1;
myVar++ // is increments the value. does the same like code above 
// decrementing value (subtacting 1)
var MyVar = 85;
MyVar--
//Decimal numbers
var ourDecimal = 5.7; 
var myDecimal = 0.000008;
// Multiplying decimals 
var product = 2.01 * 0.0007;
//Divide decimals 
var quotient1 = 2.5 / 7.5;
// Remainder (remainder of the division of two numbers)
var remainder; 
remainder = 11 % 3;

// ---------------------------------------------------------------------------------- // 
// Compound Assigement with Augmented Addition 
var H = 3;
H = H + 15; // it is common operation so there is a shortcut 
H *= 12;
// Compound Assigement with Augmented Subtraction
var G = 12;
G = G - 6;
G -= 6;
// Compound Assigement with Augmented Multiplication 
var F = 5;
F = F * 5;
F *= 5;
// Compound Assigement with Augmented Division 
var D = 48;
D = D / 48; 
D /= 48;

// ------------------------------------------------------------------------------------ // 
//Declare String Variables
var firstName = 'Alan'; //String is a 
var firstname = "Alan"; //value surrounded by double or single quotation marks 

//Quotes inside quotes
var myStr = "I am a \"double quoted \"string inside \"double quoted string";
// placing \ in front of quotes in sentence like this console logs quotes 
// shows quotation marks without the back slashes

var mystr = 'I am a "double quoted" text or link inside "single quotes"';
// single quotes 
var mySTR = `I am a 'single quote' and a "double quote" inside backticks`;
// backticks = `` 

/* CODE OUTPUT in STRING 
\' single quote, 
\" double quote
\\ backslash
\n newline
\r carriage return 
\t tab
\b backspace 
\f form feed 
*/
var meinstr = "FirstLine\n\t\\Secondline\nThirdline";
// \n adds second line, \t for the tab, and \\ to add a backslash 
// three different lines with tab and backslash 

//Concatenating strings (putting string together)
var meinestr = "This is first string" + "This is second string";
console.log(meinestr)

// Concatenating string using += 
var conStr = "This is first sentence";
conStr = conStr + "This is second sentence";
conStr += "This is the second sentence" // shortened example 

// Concatenate string and variable 
var names = "Mila";
var myNames = "My name is " + names ". Nice to meet you.";

// Appending Variables to strings ()
var someAdjective = "worthwhile";
var mYstr = "Learning to code is ";
mYstr += someAdjective;

//Length of the string 
var FirstNameLength = 0;
var firstName = "Aud";
FirstNameLength = firstName.length;
console.log(FirstNameLength);

