let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction);
//This will log yikes in the console because yikes is a primitive value(string).
// what we nee dto understand from this is that reaction is a string and though it migh seem like an array of characters but it's very different.
// Because an array is both accessible(we can point to it) and mutable but a string is only accessible but not mutable.


let array = [1,"sam", 22];
let string = "sam";
console.log(array[0]); //possible and will log 1
console.log(string[0]);//possible and will log s
array[0] = "haha"; // possible, which is why now the first element of the array "array" is haha and not 1 
string[0] = "c";   // not possible, which is why the first character of the string 'string' is still s and not c
                   // asking to change a primitive value like this might throw an error or silently refuse our request depending on which 
                   //mode we are using


//JavaScript won’t let us set a property on any primitive value, be it a number, string or something else. 
//But rest assured that this will never work:


//Now let's deal with the biggest contradiction in ur head
let naam = 'Sameena';
naam = 'Nadeem';
console.log(naam); // "Nadeem"
//This might seem like we are mutating the string naam but we are not. Why?....
//Because we always said that primitive values are immutable, we never said anything abt variables.
//Variables are just wires that are pointed towards specific values.


//One very very important thing to remember (which will also clarify the terms "pass by reference" and "pass by value") :
//During an assignment (=) the left hand side has to be and is always a variable wire and the right hand side has to be and is always a value.
 let x = 10; // make the variable wire x to point toward the value 10
 let y = x; // make the veariable y to point towards the value which the variable x is pointing to
 x=0; // make the variable x point towards the value 0


//We can’t really pass variables to functions 
console.log(x); // So here we are passing 0 to the function console.log 
                // only in an indirect way where we ask the js to fill in the value that x is currently pointing to in the box
//When we write pet, we’re asking JavaScript a question: “What is the current value of pet?” To answer our question, JavaScript 
//follows pet “wire,” and gives us back the value at the end of this “wire", thus  a variable name like pet can serve as an expression too!

let answer = true;
answer.opposite = false; // not possible
console.log(answer.opposite); // should either ignore or throw an error
//all primitive values are immutable and and assigning a property is equivivalent to changing the value


null = 10; // extremely wrong expression because left side needs to be a variable wire and null itself is a value(primitive one).

//Remember, in js you can only pass value, you cannot pass a variable wire.

//One more thing
function changePrimitiveValue(x){ // x in the argument is pointing towards sameena
        x = x + "nadeem";             // This function makes the x to point towards nadeem
        return x;                 // then returns the value x is pointing to
}
let myPrimitiveValue = "sameena"; // myPrimitiveValue only points towards sameena
myPrimitiveValue = changePrimitiveValue(myPrimitiveValue); // should throw an error 
                                                           //***** This was expected but myPrimitiveValue is now pointing towards sameenanadeem
function changeNonPrimitiveValue(x){
    x = x + 20;
    return x;
}

let myNonPrimitiveValue = ["sam", "sandy", 30];
myNonPrimitiveValue = changePrimitiveValue(myNonPrimitiveValue); //****myNonPrimitiveValue points towards an array ["sam","sandy",3020]
