1   //undefined
    //As we already know that undefined is a primitive value.
    //In JavaScript, it represents the concept of an unintentionally missing value.It shows up in some situations where JavaScript doesn’t 
    //know what value you wanted.
    let x;
    console.log(x); // This will print undefined
    //Because u didn't point the variable to a value, it will by default point itse;f to undefined.
    //Don’t get too hung up on its name. It’s tempting to think of undefined as some kind of variable status, e.g. “this variable is not yet 
    //defined.” But that’s a completely misleading way to think about it! In fact, if you read a variable that was actually not 
    //defined (or before the let declaration), you will get an error:
    console.log(jabberwocky); // ReferenceError!
    let jabberwocky;
    //That has nothing to do with undefined.

 2  //null
    //In practice, null is used for intentionally missing values. Why have both null and undefined? This could help you distinguish a coding 
    //mistake (which might result in undefined) from valid missing data (which you might express as null). However, this is only a convention,
    //and JavaScript doesn’t enforce this usage. Some people avoid both of them as much as possible!

 3  //boolean
    //while performing logical operations using booleans => true is 1 and false is 0
    let isSad = true; // true
    let isHappy = !isSad; // false
    let isFeeling = isSad || isHappy; // true
    let isConfusing = isSad && isHappy; // false

4   //numbers
    console.log(0.1 + 0.2 === 0.3); // false
    console.log(0.1 + 0.2 === 0.30000000000000004); // true
    //This happens because JavaScript doesn’t implement the kind of math we use in real life. Floating-point math is “math for computers.”
    //In real math, there is an infinite set of numbers. But in floating-point math, there are only 18 quintillion of them. So when we 
    //write numbers in our code or do calculations with them, JavaScript picks the closest numbers that it knows about.
    //In other words, JavaScript uses numbers with limited precision.
    //We can imagine all of the JavaScript numbers on an axis. The closer we are to 0, the more precision numbers have, and the closer 
    //they “sit” to each other:
    //This is because relatively small numbers occur more often in our programs, and we usually want them to be precise.
    //As we move from 0 in either direction, we start losing precision. At some point, even two closest JavaScript numbers stay further 
    //apart than by 1:
    console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
    console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
    console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (again!)
    console.log(Number.MAX_SAFE_INTEGER + 3); // 9007199254740994
    console.log(Number.MAX_SAFE_INTEGER + 4); // 9007199254740996
    console.log(Number.MAX_SAFE_INTEGER + 5); // 9007199254740996 (again!)
    //Any whole numbers between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER are exact. This is why 10 + 20 === 30
    //But when we write 0.1 or 0.2, we don’t get exactly 0.1 and 0.2. We get the closest available numbers in JavaScript. 
    //They are almost exactly the same, but there might be a tiny difference. These tiny differences add up, which is why 
    //0.1 + 0.2 doesn’t give us exactly the same number as writing 0.3.
    let scale = 0;
    let a = 1 / scale; // Infinity
    let b = 0 / scale; // NaN
    let c = -a; // -Infinity
    let d = 1 / c; // -0
    console.log(typeof(NaN)); // "number" => This is confusing
    //So it is a numeric value. It happens to be called “not a number” because it represents an invalid result.
 
 5  //BinInts
    //Regular numbers can’t represent large integers with precision, so BigInts fill that gap (literally). 
    //This means that in our JavaScript universe, there is an infinite number of BigInts—one for each integer in math.   
    let alot = 9007199254740991n; // n at the end makes it a BigInt!
    console.log(alot + 1n); // 9007199254740992n
    console.log(alot + 2n); // 9007199254740993n
    console.log(alot + 3n); // 9007199254740994n
    console.log(alot + 4n); // 9007199254740995n
    console.log(alot + 5n); // 9007199254740996n
    //With Bigints we have achieved the precission we were hoping for.
    // No funny business with the rounding! BigInts are great for financial calculations where precision is especially important.
    // But keep in mind that nothing is free. Operations with truly huge numbers may take time and resources—we can’t fit all the 
    // possible BigInts inside the computer memory. If we tried, at some point it would crash or freeze. But conceptually, 
    // we could tour our JavaScript universe for eternity and never reach every single BigInt.
 
6   //Symbol
    let alohomora = Symbol();
    console.log(typeof(alohomora)); // "symbol"
    // properties. Symbols serve a similar purpose to door keys: they let you hide away some information inside an object and control which
    // parts of the code can access it.


