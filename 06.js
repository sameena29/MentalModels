//non-primitive values are types that let us make our own values.

let rapper = { name: 'Malicious' };
rapper.name = 'Malice'; // Dot notation
rapper['name'] = 'No Malice';// Bracket notation

//Every time we use the {} object literal, we create a brand new object value:
let shrek = {};
let donkey = {};

//the [] array literal creates a new array value—a value that never existed before.

let junk = {};
junk = null; // Doesn't necessarily destroy an object
//Instead, JavaScript is a garbage-collected language. This means that although we can’t destroy an object, it might eventually 
//“disappear” if there is no way to reach it by following the wires from our code.
//JavaScript doesn’t offer guarantees about when garbage collection happens.
//Unless we’re trying to figure out why an app is using too much memory, we don’t need to think about garbage collection too often. 
//We can create objects—but we cannot destroy them.

for (let i = 0; i < 7; i++) {
    console.log(2);
  } //We will see the log seven times—but we are passing the same value in each call.
  //2 is a number literal. A literal is an expression—a question to our universe. There is only one value for every number in our 
  //universe, so it “answers” our question by “summoning” the same value for the number 2 every time.
  for (let i = 0; i < 7; i++) {
    console.log({});
  }//We will see the log seven times and everytime a new object is created.
  //Here, too, {} is a literal—except it’s an object literal. Our JavaScript universe doesn’t “answer” an object 
  //literal by summoning anything. Instead, it creates a new object value—which will be the result of the {} object literal. 

  //Technically, functions are objects in JavaScript. We treat them as a separate fundamental type because they have 
  //unique capabilities compared to regular objects. But, generally if you can do something to an object, you can also do 
  //that to a function too. They are very special objects.

function x(){
return 7;
};              //A function that return 7 upon cLLING
let y = x();    //y points towards the value that the function to which x is pointing returns when it is called
console.log(y); //logs the value that y is pointing to

let a = function() { return 7; }; // a points towards a function that returns 7 when it is called
let b = a;                        // b points towards the same function that a is currently pointing to 
console.log(b);                   // logs the function like this => ƒ () { return 7; } 
//Why the function was logged instead of 7 should be clear if we follow the variable wire concept (At no point the function was called 
//using this '()', so none of the variables point towards the value that function returns upon calling. As a result, both a and b point 
//to the same value, which happens to be a function. See, functions are values.
//Note that neither the let declaration nor the = assignment have anything to do with our function call. It’s () that performs the 
//function call—and it alone!
//In fact, countDwarves() is also an expression. It’s known as a call expression.


//-------HOW PRIMITIVE VALUES ARE DIFF FROM NON-PRIMITIVE VALUES---------
//writing 2 or "hello" always “summons” the same number or a string value. Objects and functions behave differently and allow us to 
//generate our own values. Writing {} or function() {} always creates a brand new, different value.