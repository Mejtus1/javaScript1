//ARROW FUNCTIONS 
//arrow function is a different way to define a function 
function DoSomething() {
};
//Newer function which can be used 
const DoSomeething = () => {
};
//........................................................................................................
//If we want to export function to different file 
export default function DoSomething() { //we use export default with basic functions 
};
//easier and faster export 
export const DoSomeething = () => {
};
//It is important because in react we define components and components are just like funcitons 
const MyComponent = () =>  {
    return <div> </div> 
};

//........................................................................................................
//Anonymous functoin - it allows you to execute function without declaring it 
<button 
    onClick={() => { //anonymous function within function 
        console.log("hello world");
    }}
></button>; //this is a typical react component 

//........................................................................................................
//TERNARY OPERATORS 
//when we code in react there is always need to minimalize the amount of code you are writing
//REACT allows you to write javascript in HTML but it is called JSX
if (true){

} else {

}
//which is already 5 lines of code it takes too much space
let age = 10; 
let name = "Pedro";
//if the age is greater than 10 it is Pedro, if it is not name should be Jack
if (age > 10) {
    name = "Pedro"
} else {
    name = "Jack"
} //We can do this but it is taking too much space 

//Easier way of doing this 
let age = 16;
let name = age > 10 && "Pedro"; //using OR operator 
//all we are saying is if age is greater than 10 THAN name variable will be called Pedro

//THIS IS THE IF ELSE OPERATOR 
let name = age > 10 ? "Pedro" : "Jack";
//? : is if else operators 
// ? = if age > 10 true than Pedro
// : = else Jack 

const Component = () => {
    return <div> Pedro </div> <div> Jack </div>
} //we have two pieces of UI in html 
//And with JSX we can do: 
const Component = () => {
    return age > 10 ? <div> Pedro </div> : <div> Jack </div>
} //if age is greater than 10 return Pedro else return Jack 


//...................................................................................
//Objects in javascript and JSX 
//Destructuring of objects 

const person = {
    name: "Pedro"
    age: 20,
    isMarried: false,
};
//if we want to create variables that create specific values inside this object
const name = person.name //now we have variable name from object Person and key value pair with its value 
const age = person.age
const isMarried = person.isMarried //This is again taking too much space
//We can write it in a single line using destructuring objects
//Like this:
const { name, age, isMarried } = person; //this corresponds to 3 line code above

//same name variables and key value pairs inside objects
const name = "Pedro";
const age = 20;
const person = {
    name, //we dont have to rewrite values in key value pairs inside objects
    age, // we just set them like this it saves space 
    isMarried: false,
}



//We want to create same Person as Person1 but the name is other 
//HOW to I copy a object but change just a one single property of it 
const person = {
    name: "Pedro"
    age: 20,
    isMarried: false,
};
// (...) = spread operator //I want to keep everything insïde of this Object, but
const person2 = {...person, name: "Jack"}
                           //whatever i put here
                           //changes ! 



//ARRAYS and destructuring 
const names = ["Pedro", "Jack", "Victoria"]
const names2 = [...names, "Joel"]; //we add here name Joel + array names into new array names2
//this is how you are going to manipulate and add 
//elements to arrays that are inside of states


//........................................................................................................
//Important Array functions used in React 
//These functions are used to manipulate arrays in various manners
let namess = ["Pedro", "Jack", "Victoria"];
//.map and .filter functions 

names.map(() => {
    
})

