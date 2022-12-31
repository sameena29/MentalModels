//In JavaScript, Object.is(a, b) tells us if a and b are the same value: (apart from checking it with =,==)
console.log(Object.is(2, 2)); // true
console.log(Object.is({}, {})); // false
//Object.is() is called same value equality.
//Object.is() => This will always give the answer based on our mental model i.e all primitive values are just summoned when a variable 
//is made to point towards it, so two "7" cannot exist or two "seven" also cannot exist. But in case of non-primitive values,
//new values are created everytime a variable is made to point towards it.

//Now that we know exactly how same value equality works, we can also understand how strict equality(===) works:
//When we check the equality of two things using === It will give exactly the same result as we get with same value equality
//There are only two exceptions:
// NaN === NaN is false, although they are the same value.
// -0 === 0 and 0 === -0 are true, although they are different values.
let width = 0 / 0; // NaN
let height = width * 2; // NaN
console.log(width === height); // false
console.log(Object.is(width, height)); // true
//The reason for NaN === NaN being false is largely historical, so accepting it as a fact of life is wise.
//This exception of strict equality becomes a problem in cases like this:
function resizeImage(size) {
    if (size === NaN) {
      // This will never get logged: the check is always false!
      console.log('Something is wrong.');
    }
    else{}
  }
//Here our aim is to make sure that size is a number and then only rest of the function code will be executed and if not then 
//throw an error.But we know that using strict equality we will fail the intention.
//Instead, here are a few ways (they all work!) to check if size is NaN:
Number.isNaN(size)
Object.is(size, NaN)
size !== size // This is confusing but is correct (if we assume that only a vlue of number type is passed)
              // because we know that there are only two possible cases:
              // If size is a proper number, and number is always equal to itself
              // size !== size works because NaN === NaN is false, as we already learned. So the reverse (NaN !== NaN) must be true.
              // Since NaN is the only value that’s not Strict Equal to itself, size !== size can only mean that size is NaN.

//Loose equality (==) uses a set of arcane rules and is often avoided.
console.log([[]] == ''); // true
console.log(true == [1]); // true
console.log(false == [0]); // true   //None of these lines of codes with == make any snese.
//Many coding standards prohibit the use of == and != in code altogether.
// It’s uncommon in modern codebases, and its rules don’t play a larger role in the language—or in our mental model.
//The rules of loose equality are widely acknowledged as an early bad design decision of JavaScript,

if (x == null) {
    // ...
  }
//The above code works exaclt like this:
if (x === null || x === undefined) {
    // ...
  }

//Interesting code:
let ticket = { id: 0 };
if (ticket === { id: 0 }) {
  console.log('Bad ticket');
}
//Can this ever log "Bad ticket" ?
//On the left side, we have ticket, whose value is the object we created on the first line by writing { id: 0 }. 
//On the right side, we have a { id: 0 } object literal — which also creates a completely new value!

//LET'S TRY WRITING A FUNCTION WHICH RETURNS ANSWER EXACTLY LIKE === WITHPUT USING ===
function strictValueEquality (a,b) {
    
    if (Object.is(a,b)){
        if((Number.isNaN(a)) && (Number.isNaN(b)) ){
            return false
        }

        else return true;
    }

    else {
        if (
          (Object.is(a, 0) && Object.is(b, -0)) ||
          (Object.is(a, -0) && Object.is(b, 0))
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
