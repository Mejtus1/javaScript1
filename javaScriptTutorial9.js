//Getters and setters 
// Use getters and setters to Control Access to an Object
//with a class object we often want to obtain values of an object and set a value of an property within an object

class Book {                    //this class object we have a constructor a getter and a setter
    constructor(author) {       //constructor
        this._author = author;
    }

    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updateAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass() {
    return
}

//Import Export
//Understand the differences between import and require 
import { capitalizeString } from "./string_function" //this **
const cap = capitalizedString("hello!");
console.log(cap);
//string_function.js (another file)
export const capitalizedString = str => str.toUpperCase()
//export is exporting this arrow function =>
//we can import it to the upper file with this **



//USE export to reuse a code block 
const capitalizedString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
    } //we have afunction here, we can put export before function but we con do it like this too: 

    export { capitalizeString } //you can call functoin here and type export before it 

    export const foo = "bar"; //and to export these variables we can just put export before them 
    export const = "foo"; 

//USE * to import everything from a file 
import * as capitalizeStrings from "javaScriptTutorial1.js";
//its just import * as and than you have to create a object to put everything inside it 
//after creating an object (capitalizedStrings) and specify the file name 


//Importing a default export 
import subtract from "math_functions";