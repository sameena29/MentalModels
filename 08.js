//A single object can’t have two properties with the same name.
//Property names are also always case-sensitive! For example, age and Age would be two completely different properties.

let sherlock = { surname: 'Holmes', age: 64 };
let propertyName = prompt('What do you want to know?');
alert(sherlock[propertyName]);//Did not really understand how this can help me if I do not know the property 

//Missing property
//JavaScript uses a set of rules to deal with this:
//1) Figure out the value of the part before the dot (.).
//2) If that value is null or undefined, throw an error immediately.
//3) Check whether a property with that name exists on our object:
//a. If it exists, answer with the value this property points to.
//b. If it doesn’t exist, answer with the undefined value.

console.log(sherlock.boat); // undefined
                            // Note this does not mean that our object has a boat property pointing to undefined!
console.log(sherlock.boat); // undefined
console.log(sherlock.boat.name); // TypeError! => follow the same rules for this too and u will understand why the error was thrown

//Note that 
let president = { next: president } //would not work.
//Assignment happens in three steps: 
//(1) find the wire on the left, 
//(2) find the value on the right, 
//(3) point the wire to that value.
//By the time we create the { next: president } object (step 2), we haven’t yet pointed president variable anywhere (step 3), 
//so we can’t use it yet! So instead, we create our object and assign it to the president variable first. 
//Then, we point the next property wire from that object to itself.

