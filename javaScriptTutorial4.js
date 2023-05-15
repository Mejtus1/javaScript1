//Boolean values 
// there are only two values TRUE and FALSE 

function welcomeToBooleans() {
    return true;                // returns function true
    return false;               //returns function false 
}

//Use conditionals logic with if statements 
// keyword if tells javascript to execute code under certain conditions defined in the pratenthesis 
function ourTrueOrFalse(isItTrue) {
    if isItTrue {                       //If isItTrue is true
        return "Yes, it is true";       // return this 
    }
    return "No, it is false";           // is its false returns this 
}
console.log(trueOrFalse(true));

//---------------------------------------------------------------------------//
//Comparison with the equality operator 
function testEqual(val) {   // == equiality operator tryes to convert both values to ta common type 
    if (val == 12) {        //there needs to be two == because we are trying to compare the value not try to assign value with =
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

//Comparison with the strict equality operator 
// === strict equality operator, does not  do the type conversion 
//3 === 3 (true), 3 === "3"(false)
function testStrict(val) {
    if (val === 7) {
    return "Equal";
    }
    return "Not Equal";
}
testStrict(10);

//Inequality operator 
function testNotEqual(val) {
    if (val != 99) {
    return "Equal";
    }
    return "Not Equal";
}
testNotEqual(10);

//Strict inequality operator 
function testStrictNotEqual(val) {
    if (val !== 17) {  // it checks if these 17 is not true but it will not convert types
    return "Equal";
    }
    return "Not Equal";
}
testStrictNotEqual(10);

//Comparison with logical And Operators 
function greaterThan(val) {
    if (val > 100) {
        return "Greater than 100";
    }
    if (val > 10) {
        return "Grater than 10";
    }
    return "10 or under";
}
console.log(greaterThan(10));
// same goes for Greater than or Equal >= operator
// same goes for Less than < operator 
// same goes for Less or Equal =< operator

// Comparisons with logical AND operator 
function testLogicalAnd(val) {
    if (val) {
      if (val) {                //Compares if two criteria are met 
        return "Yes";           //But we can and it is good practice to use    
      }                         // AND operator which compares automatically 
    }                           //Two values inside single function 
   return "No";
}

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) { // WE USE && for double criteria 
        return "Yes";
    }
        return "No";
}    
console.log(testLogicalAnd(10));

//Comparisons with logical OR operator 
function testLogicalOr(val) {
    if (val < 10) {
        return "Outside";
    }
    if (val > 20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);

function testLogicalOR(val) {
    if (val < 10 || val > 20) { //Logical OR operrator 
        return "Outside";            //Compares if one of two values corresponds true 
    }
    return "Inside";
}  
testLogicalOR(15);
//-------------------------------------------------------------------------------------//
// Else statements 
//If code after IF statement is true, the code after IF will be evaulated 
//If its not true, nothing happens 
//WITH AN ELSE statement, block of code can be executed when IF is not true
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        return = "5 or Smaller";
    }
    return result;
}

//Else if statements (multiple conditions)
function testElseIf(val) {
    if (val > 10) {                     //This based on ELSE IF standars is wrong, because when we pass in value 3 we will get less than 10
        return "Greater than 10";       //Altough we want it to show less than 5, the problem is in ORDER 5 should be evauled before 10 !!!
    } else if (val < 5) {               //else if can be used multiple times 
        return "Smaller than 5";        //for implication of comparing of multiple values/statmetns
    } else {
        return "Between 5 and 10";      
    }
}
testElseIf(7);

//In using else IF statements, order is very important 
function testElseIf(val) {
    if (val < 5) {                      //ONCE THE FIRST CONDITION IS MET, IT DOESNT EVEN CHACK FOR THE REST OF THE CONDITIONS 
        return "Less than 5";      
    } else if (val > 10) {               
        return "Bigger than 10";        
    } else {
        return "Between 5 and 10";      
    }
}

//Chaining IF ELSE statements 
function testSize(val) {
    if (num < 5) {
        return "Tiny"
    }
    else if (num < 10) {
        return "Small"
    }
    else if (num < 15) {
        return "Medium"
    }
    else if (num < 20) {
        return "Large"
    }    
    else {
        return "Tiny"
    }   
}
console.log(testSize(7));

//Golf game using Javascript 
//using array 
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Boogey", "Double Bogey", "Go home"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    }
    else if (strokes <= par - 2) {
        return names[1]
    }
    else if (strokes == par - 1) {
        return names[2]
    }
    else if (strokes == par) {
        return names[3]
    }
    else if (strokes == par + 1) {
        return names[4]
    }
    else if (strokes == par +2) {
        return names[5]
    }
    else if (strokes >= par + 3) {
        return names[6]
    }
}
console.log(golfScore(5, 4));
