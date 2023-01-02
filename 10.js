let pizza = {};
console.log(pizza.taste); // "pineapple" => Is actually possible
//But according to our mental model it should have logged undefined because the property doesn't exist

let human0 = {
    teeth: 32
  };
  
  let gwen0 = {
    age: 19
  }
  console.log(gwen.teeth); // undefined => normal result
//avaScript’s default behavior returns undefined, but we can instruct it to continue searching for our missing property on another object.
//We can do it with one line of code:  
let human1 = {
    teeth: 32
  };
  
  let gwen1 = {
    // We added this line:
    __proto__: human,
    age: 19
  };
  console.log(gwen.teeth); // 32
//Note how although the value of gwen.teeth is 32, it doesn’t mean gwen has a teeth property! 
//Indeed, in this example, the object that gwen points to does not have a teeth property. 
//But its prototype object—the same one human points to—does.

//This how it works when ur object has a prototype oject an that object has a prototype object
  let mammal = {
    brainy: true,
  };
  
  let human2 = {
    __proto__: mammal,
    teeth: 32
  };
  
  let gwen2 = {
    __proto__: human,
    age: 19
  };
  
  console.log(gwen.brainy); // true
//We can see that JavaScript will search for the property on our object, then on its prototype, then on that object’s prototype, 
//and so on. We would only get undefined if we ran out of prototypes and still hadn’t found our property.
//(This is similar to saying, “I don’t know, but Alice might know.” Then Alice might say, “Actually, I don’t know either—ask Bob.
//” Eventually, you will either arrive at the answer or run out of people to ask!)

let human3 = {
    teeth: 32
  };
  
  let gwen3 = {
    __proto__: human,
    teeth: 31
  };
  console.log(human.teeth); // 32
  console.log(gwen.teeth); // 31
//If gwen didn’t have its own teeth property, we would look at the prototype.
//But because the object that gwen points to has its own teeth property, we don’t need to keep searching for the answer.

console.log(human.hasOwnProperty('teeth')); // true
//It returns true for “own” properties, and does not look at the prototypes.

let Object1 = {
    teeth: 32,
    f:"k",
    i:"l",
    e:"p",
    oo:"uu",
};
let object2 = {
    __proto__: object1,
    prop: "something"
};
console.log(object2.__proto__); // {teeth: 32, f: 'k', i: 'l', e: 'p', oo: 'uu'} 
                                //So basically doing this gives a list of all the properties of the object's prototype object
//suprisingly:
let x = {};
console.log(obj.__proto__);//This loggs a big list of many properties even though object x is an empty object
//This is because any object when created has a prototype object (We’re can call that special object the Object_Prototype:) by default 
//and this object_prototype has many many properties, This explains why JavaScript objects seem to have “built-in” properties:
//including the hasOwnProperty which we talked abt earlier.
let you ={
    some: "else",
}
console.log(you.__proto__);//Gives the list of properties that Object_Prototype has
let giyan = {
    __proto__: you,
    again: "haha",
}
console.log(giyan.__proto__);//Loggs => {some: 'else'} and does not list the properties of Object_Prototype anymore,
                             //But that doesn't mean that Object_prototype is not giyan's proptotype anymore, it's still there.
let u ={
    __proto__ : you,
    __proto__ : giyan,
    f:"hy",
};
//Also one thing to note is that an object can have at max two and at min 0 prototype, now how is zero possible if every object when 
//created has a default prototype..? => by doing this!
let weirdo = {
    __proto__: null
  };
//this will produce an object that truly doesn’t have a prototype at all. As a result, it doesn’t even have built-in object methods
//Also the Object_Prototype is exactly that — "an object with no prototype".

//MUTATION OF PROTOTYPES
//If JavaScript searches for missing properties on the prototype, and most objects share the same prototype, 
//can we make new properties “appear” on all objects by mutating that prototype?
let a ={
    prop1: "same",
    prop2: "ditto"
};
let b={
    prop3: "haha",
    prop4: "gigi"
};
console.log(a.smell)//loggs "undefined"
//adding the smell property to the object_prototype
let c = {};
c.__proto__.smell = 'banana';
console.log(a.smell)//loggs "banana"
console.log(b.smell)//banana
//Now every object in ur particular doc will have the smell property
//Mutating a shared prototype is also called property polluting

//You probably won’t use prototypes much directly in practice. However, they are fundamental to JavaScript objects, 
//so it is handy to understand their underlying mechanics. Some advanced JavaScript features, including classes, 
//can be expressed in terms of prototypes.

let spider = {
    legs: 8
  };
  
  let miles = {
    __proto__: spider
  };
  
  miles.legs = 2;

  console.log(spider.legs);//8
  console.log(miles.legs);//2
  //You should be able to justify this result






  