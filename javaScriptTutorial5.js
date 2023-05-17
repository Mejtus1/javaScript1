//Build javaScript Objects 
//Objects are simmilar to arrays, BUT instead of using indexes to access data you use properties 
//Object ourDog
var ourDog = {                  //Objects are defined with curly braces, at the beginning and the end 
    "name": "Camper";           
    "legs": 4,                  //name, legs, tails, friends are object properties, properties are everything before the colons :
    "tails": 1,                 // 1 is a object value, 4 is value of object property legs 
    "friends": ["everything!"]  //properties can be any data type in javascript 
};

var myDog = {
    "name": = "John"
    "legs": = 4,
    "tails": = 1,
    "friends": []
};

//ACCESSING OBJECT PROPERTIES WITH DOT NOTATION
// there are two main ways in accessing an object 1. is with dot notation 

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat; // we assign a new variable and access the object value with a dot notation
var shirtValue = testObj.shirt; // now variable shirtValue will output jersey from first object

//ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"]; //you can use bracket notation to access an property in an object and value it represents 
var drinkValue = testObj["the drink"]; //drinkValue is set to equal value water, entreeValue is set to equal value hamburger 

//Accessing Object Properties with Variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16; // we set variable to object property 16 which has value Montana
var player = testObj[playerNumber]; //now player is set to string montana which is value of object property

//Updating object properties with DOT notation 

var myDOg = {
    "name": = "Camper"
    "legs": = 4,
    "tails": = 1,
    "friends": ["everything!"]
};

myDOg.name = "Happy Camper";
//Our dog object property name will now be changed to value Happy Camper

//Adding new properties to an object (you can add new properties in object using dot notatoin or bracket notation)
var myDOG = {
    "name": = "Friend"
    "legs": = 4,
    "tails": = 1,
    "friends": ["everything!"]
};
myDOG.bark = "baf-baf"; 
// it had 4 properties now it has 5 with added bark porperty with value baf baf 
//now we can change value of added property 
myDOG["bark"] = "woof!";
// now object my dog with object property bark has changed to object property woof 

//Deleting properties from an object 
//For DELETING property from our object we use "delete"
delete myDOG.bark;

//using objects for lookups (you can use object to lookup object property values) something like an array but its object data structure
function phoneticLookup(val) {
    var result = "";

    switch(val) {           //This is a switch statement which we can exchange with object 
    case "alpha":
        result = "Adams";
        break;
    case "bravo":
        result = "Boston";
        break;
    case "charlie":
        result = "Chicago";
        break;
    case "delta":
        result = "Denver";
        break;
    case "echo":
        result = "Easy";
        break;
    }
}
//This is example of object exchanged from switch statement above
function phoneticLookUp { 
    var result = "";
    var lookUp = { 
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    };
    result = lookUp[val];
    return result;
}
console.log(phoneticLookUp("charlie"));   //when we input into our function which stores object, object property, we get out property value 

//Testing Objects for Properties (you can check if the object has a property)
//We use for it 
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) { //most important here is hasOwnPorperty method which is used for searching in objects
    return myObj[checkProp];    //inside this function we specify that if checkProp return true, it is gonna return the property value not true/false
} else {                        //we could write only myObj.hasOwnProperty(), otherwise we are going to return not found 
    return "Not Found" 
    }
}
console.log(checkObj(""));

//Manipulating complex objects 
//a javacript object is a way to store flexible data
//here we have an example of Array with Objects inside, with key object property value paris stored inside
var myMusic = [
    { //first object
        "artist": "Billy Joel",     
        "title": "Piano Man",
        "release_year": 1973,
        "Formats": [                //we have here too an array within an javascript object property that is within array
            "CD",                   // variable my music stores an array inside which are objects with object properties and their values 
            "8T",                   
            "LP"
        ],                          //after array we need to always use comma 
        "gold": true
    }, 
    { //second object                              //we are gonna add here next object inside our array
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ],

    }
];
//ACCESSING NESTED OBJECTS
var myStorage = {
    "car": {                //we have here car object
        "inside": {         //which have inside inside object
            "glove box": "maps",        //which have inside glove box object
            "passenger seat": "crumbs"  //and passenger seat object 
        },
        "outside": {                //than we have outside object 
            "trunk": "jack"         //which have inside trunk object with object property value "jack"
            }
        }
    };                                                         //when we want to access object inside object 
    var gloveBoxContents = myStorage.car.inside["glove box"];  //we use myStorage object with dot notation, and when we have object with space between we need to use bracket notation 
    console.log(gloveBoxContents)               //when we want to access other properties inside objects

    //Accessing Nested arrays 
    //the trees are second element in my plant array which is number 1
    var myPlants = [ 
        {   //object number 1 
            type: "flowers",
            list: [ // key value pair here
                "rose",
                "tulip",
                "dandelion"
            ]
        },
        {   //object number 2 "trees"
            type: "trees",
            list: [ //key value pair number 2 
                "fir",
                "pine",
                "birch"
            ]
        }
    ]
var secondTree = myPlants[1].list[1]; //we get answer pine 
secondTree = myPlants[0].list[1]; //we get answer tulip


