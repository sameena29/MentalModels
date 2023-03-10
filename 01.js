let //So the evariables are basically passed by value so when,

let a = 5;
let b= a;
a=0;
//Now a=0 but b=5; => changing a won't change b 
//////////////////////////////////////////////////////////////////////////////////////
//but objects on the other hand are passed by reference 

function duplicateSpreadsheet(original){   
    if(original.hasPendingChanges){
        throw new Error('You need to save the file before you can duplicate it.');
  }
        let copy = {
            created: Date.now(),
            author: original.author,
            cells: original.cells,
            metadata: original.metadata,
        };
        copy.metadata.title = 'Copy of ' + original.metadata.title;
        return copy;
}
//  Here what we don't realize is that the we are chnaging the title of original sheet too.
//  Here's how it works:
//  lets's say that I declare an object a => let a = {
//                                                 name: same,
//                                                 age: 22,
//                                                 country: India, }
//  After that I declare an object b like this:
//  let b = a; => In this case I am passing it by reference so everytime I change the value of a property of b the value
//  of the same property of a chnages automatically but if I do this :
//  let b = {
//       name: a.name,
//       age: a.age,
//       country: a.country,
//   }

//  I can change the values of the properties of b but the values of a's properties won't change.