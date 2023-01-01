//Objects might appear “nested” in code, but in our universe, each object is completely separate. 
//An object cannot be “inside” of another object! 
let sherlock = {
    surname: 'Holmes',
    address: { city: 'London' }
  };

  let john = {
    surname: 'Watson',
    address: sherlock.address
  };
//When you see address: sherlock.address, it is tempting to think that John’s address property points to Sherlock’s address property.
//This is misleading.
//Remember: a property always points to a value! It can’t point to another property or a variable.
//It’s the value itself (the object previously created with { city: 'London' }) that matters during the assignment, 
//not how we found it (sherlock.address).
john.surname = 'Lennon';
john.address.city = 'Malibu';
//Now because of doing this we have changed both sherlock's and john's address to Malibu.
//Now, what could be alternative solutions of changing only john's address
//1) Mutate the value(in this case object) to which john's assdress was pointing to 
john.surname = 'Lennon';
john.address = { city: 'Malibu' }; 
//OR
//2) Mutate the whole object john was pointing to
john = {
    surname: 'Lennon',
    address: { city: 'Malibu' }
  };

//If u think that using const while making an object can make sure that mutations can't take place at all then u r wrong.
const sam = {age:22, place:Nagpur};
sam = "name"; // This will definitely give error saying "Assignment to constant variable not possible".
//But I can make it's property variables to tpoint towards other values.
sam.age = 23;//Possible
sam.place= "Gurgaon";//Possible
// The usefulness of const is a hotly debated topic. 
// Whatever your preference may be, remember that const prevents variable reassignment—not object mutation.




    