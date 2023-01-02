1 //https://signalvnoise.com/posts/3124-give-it-five-minutes => it's easy to push back so give it five minutes.

2 //  Functions are objects, but because they include a few unique additional features, 
  //  we’re going to refer to them separately to avoid confusion.

3   // Primitive Values

    // Undefined (undefined), used for unintentionally missing values.
    // Null (null), used for intentionally missing values.
    // Booleans (true and false), used for logical operations.
    // Numbers (-100, 3.14, and others), used for math calculations.
    // BigInts (uncommon and new), used for math on big numbers.
    // Strings ("hello", "abracadabra", and others), used for text.
    // Symbols (uncommon), used to perform rituals and hide secrets.

    // Objects and Functions

4   // Objects ({} and others), used to group related data and code.
    // Functions (x => x * 2 and others), used to refer to code.

5// Although code like "hi".toUpperCase() makes "hi" seem like an object, this is nothing but an illusion. 
 // JavaScript creates a temporary object when you do this, and then immediately discards it. It’s fine if this mechanism 
 // doesn’t click for you yet. It is indeed rather confusing!

6// Some values are lonely. For example, null is the only value of the Null type, 
 // and undefined is the only value of the Undefined type. 
 // As we will learn later, these two lonely values are quite the troublemakers!

7// We can ask questions with expressions. Expressions exist in our code, so they are not values. 
 // Rather, JavaScript will answer our expressions with values. For example, the 2 + 2 expression is answered with the value 4.


8// Concretely, typeof(null) is "object" even though null is not an object. Null is a primitive value. 
 // This is a very old bug in JavaScript. It cannot be fixed because fixing it would break a lot of existing code that, 
 // for better or worse, already relies on this quirk.

9// You might ask: isn’t typeof([]) === "object" a bug? No. Arrays aren’t primitive, so they are objects! So are dates, 
 // and everything not on our list. Unlike null, they’re telling the truth.