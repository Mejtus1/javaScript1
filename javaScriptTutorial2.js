// Arrays 
//Store multiple values with arrays 
// Arrays allow you to store several pieces of data in one place 
var ourArray = ["John, 23"];

// Nested array 
var myArray = [["Bulls", 23], [White Sox, 45]];

// Access Arrey Data
var ourarray = [50, 60, 70];
var ourData = ourarray[0]; // equals 50 because tha is first in our array 
console.log(ourData);

//Modify Array Data
var ouraRray = [18, 64, 99];
ourArray[1] = 45; // we set the number 1 in array which is 64 to new value 45
ourArray[2] = 54; // 99 now equals 54 

// Access multidimensional array 
var arrayWthArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = arrayWthArray[0][0]; 
//first number points towards array we want to choose = [0][0]; = first array, first number which is 1
// second number points towards numbers inside chosen array 

//Manipulate arrays with push 
var oURarray = ["Stimpson", "J", "cat"];
oURarray.push(["happy", "joy"]);
// oURarray now equals ["Stimpson", "J", "cat", ["happy", "joy"]];
myARRay = [["John", "23"], ["cat", "15"]];
myARRay.push(["dog", 3]);
// myARRay now equals [["John", "23"], ["cat", "15"]["dog", 3]];

// Manipulate Arrays with pop()
var newArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop(); // removes from our array last value 
// our newArray now equals [1, 2];
var newARray = [["Alexa", 3]["Emily", 17]];
var removedFromMyArray = newARray.pop();
// removes second array which is ["Emily", 17], and newARray will stay ["Alexa", 3].

// shift(); function 
// shift() function functions same like pop() function with difference in that is deletes first array 
var newARRay = [["Alexa", 3]["Emily", 17]];
var removeDFromMyArray = newARray.shift();

//unshift(); function adds value to the front of our array 
var firstArray = ["Alexa", "Emily", "Amy"];
firstArray.unshift("Victoria");
// now equals
var firstArray = ["Victoria", "Alexa", "Emily", "Amy"];

// Shopping list 
var myList = [["cereal", 3], ["milk", 2], ["apples", 5], ["bananas", 4]];



