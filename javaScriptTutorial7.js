//LOOPS 
//Iterate with while loop
    //loops allow you to run a code for a multiple times
    var myArray = [];

    var i = 0;
    while(i < 5) {
        myArray.push(i); 
        i++;
    }

    console.log(myArray);



//Iterate with for loops
var ourArray = [];
// for loop is most common type of loop in javascript 
for (var g = 0; g < 5; g++) {// we start by for and than there are 3 different values separated by semicolon 
ourArray.push(i);
}
var myArray = [];
//initialization is in for loop var (g = 0;) = most for loops start by initializing variable 
//the next thing is the CONDITION = (g < 5) (once is evaulates to false) 
// (i++) the end of each itteration, we increment g by 1



//Iterate odd numbers with a for loop 
var ourArray = [];

for (var i = 0; i < 10; i += 2){// dont forget to use ; notation between 
ourArray.push(i);
}
console.log(ourArray); // we create an array and push with loop numbers inside of it 

// Count Backwards with a for loop 
var ouRArray = [];

for (var i = 0; i > 10; i -= 2){// i > 10 and i -=2 we decrement by 2 
ouRArray.push(i);
}
console.log(ouRArray);



//Iterate Throught an Array with a For loop 
// it is common in javascript to itterate throught array 
var theirArray [9, 10, 11, 12];
var theirTotal = 0;

for (var i = 0; i < theirArray.length; i++) {
    theirTotal += theirArray[i]; // we are doing theirTital that starts up at 0 
}                                // += sign is adding theirTotal = theirTotal + theirArray
var                              // we are gonna add to the total whatever is in that index
//so it starts at 0 and than it adds to the total whatever is in that index from 0 to 3 
// theirTotal = runs itteration (0 + 9), theirTotal = 9
// theirTotal = (9 + 10), theirTotal = 19
// theirTotal = (19 + 11), theirTotal = 30
// theirTotal = (30 + 12), theirTotal = 42

var hArr = [2, 3, 4, 5, 6, 7, 8,];
var hTotal = 0;
for (var i = 0; i < hArr.length; i++) {
    hTotal += hArr[i];
}
console.log(hTotal);
//hTotal = hTotal + hArr[0] = (2) = 0 + 2
//hTotal = hTotal + hArr[1] = (3) = 2 + 3 = 5
//hTotal = hTotal + hArr[2] = (4) = 5 + 4 = 9 ...



//Nesting for loops 
//If there is multidimensional or Nested array, we can use for Loops to access an array elements 

function multiplayAll(arr) {
    var product = 1;
                                        //we are going inside for loop to create another for loop
    for (var i=0; i < arr.length; i++) { //first itteration is looking in the outer array (there are three arrays within it)
        for (var j=0; j < arr[i].length; j++) { // than we are looking throught arrays inside arrays 
        product *= arr[i][j]; // [i] = outer array, [j] = inner arrays 
        }
    }
    return product;
}
var product = multiplayAll([[1,2],[3,4],[5,6,7]]); //multidimensional array, (nested array = an array inside an array)
            // multiplayAll function is called here from above and there is passed this multidimensional array 

// (var i=0; i < arr.length; i++) = i = 0, if i(0 is lower than array length (call the for loop), and after that add i + i )

// 1 * 1 = 1 (product * [0][0])
// 1 * 2 = 2 (product * [0][1])
// 2 * 3 = 6 (product * [1][0])
// 6 * 4 = 24 (product * [1][1])
// 24 * 5 = 120 (product * [2][0])
// 120 * 6 = 720 (product * [2][1])
// 720 * 7 = 5040 (product * [2][2])



// Iterate with Do While loops 
// White loops first checks the condition before it runs any code within the code
// Do while loop will always run a tleast one time and than it will check the condition 
var myArray = [];
var i = 10;

while (i < 5) { // WHILE i is less than 5, nothing happens because i is not less than 5
    myArray.push(i);
    i++;
    }

do {            // do runs first and than checks the condition, 
    myArray.push(i);
    i++;
} while (i < 5) // now i is 11 and myArray is 10 

console.log(i, myArray);



//Profile lookup 

var contacts = [ // array of objects 
{ // object 
"firstName": "Akira", // key value pair 
"lastName": "Laine", // key value pair 
"number": "0543236543",
"likes": ["Pizza", "Coding", "Brownie Points"]
},
{ // object 
    "firstName": "Harry", 
    "lastName": "Potter", 
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock", 
        "lastName": "Holmes", 
        "number": "0487345643",
        "likes": ["Intriguing", "Violin", "Cases"]
        },
        {
            "firstName": "Kristian", 
            "lastName": "Vos", 
            "number": "unknown",
            "likes": ["JavaScript", "Gaming", "Foxes"]
            },
]

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) { //we will need to iterate throught each element inside contact list 
        if(contacts[i].firstName === name) { // we checking each item if it was the name that was passed in and if so we are going to do something 
            return contacts[i][prop] || "No such property";
        }    
    }
    return "No such contant";
}
var data = lookUpProfile("Shirlock", "lastName"); //outputes "Holmes".
console.log(data);



//Generating random fractions 
function randomFraction() { //just a function 
    return Math.random(); //we can use Math.random function which generates random number between 0 and 1 (it couldnt be 1)
}
console.log(randomFraction());
//Generate a random whole number 
//that can be done throught Math.floor() function 
//Math.random can never be 1, it can be a 0 
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
//when we set the number 20 it is really gonna be number between 0 and 19 

function randomWholeNum() {
    return Math.floor(Math.random() * 10); //this is gonna give us random number between 0 and 9
    }
console.log(randomWholeNum());

//Generate a Random Whole Numbers within a range 
function ourRandomRange(ourMin, ourMax) {//It takes a minimum Number and a maximum Number 
            //it than runs throught this calculation  
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
    //we have a Math.random = random between 0 and 1 
    //we multiply it by ourMax - ourMix +1 
    //we have a Math.floor = rounding down previous numbers
    //after that we add all that to our minimum number 
}

//Use the parseInt Function 
function convertToInteger(str) {    //it takes a string and returns an integer 
                                    //if an string cannot be changed to integer it returns NaN
    return parseInt(str);                                
    }
    convertToInteger("56");

//Use the parseInt function with a Radix 
// a radix is a base of a number in a string (such as base 2 = binary etc.)
// default is base 10 which is our daily use 
// we will convert binary number in an integer 
function convertToInteger(str) {
    return parseInt(str, 2) we specify next condition and it sets defauult base to binary / 2 
}
convertToInteger("10011"); //the computer will know that this is a binary number 




// Use the Conditional (Ternary) Operator
//Ternary operator is like a one line if else expression

// condition ? statement-if-true : statement-if-false;
// we have condition than we have question mark, after question mark we have if true, than colon, than false 

function checkEql(a, b) {   //this is example of classic if else expression 
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}

function checkEqual(a, b) {
    return a === b ? true : false; 
    return a === b; //the statement is the same as above 
}
checkEqual(1, 2);



//Use Multiple Conditional (Ternary) Operator 
function checkSign(num) { //you can nest multiple operators inside each other 
//this will 
return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
checkSign(10);

//if num > 0 is true = we return positive 
//if num > 0 is false = we do everything after "positive", which is another ternary operator 
//it checks if num < 0 is true = we return "negative"
//last option is zero and it iterates when both are negative like else statement 