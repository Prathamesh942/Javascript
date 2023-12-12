//An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
//We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.

//creating empty Object

// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

let user = {
    name : "john",
    age : 30
};
//A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

//access
console.log(user.name);

//add
user.isAdmin = true;
console.log(user);

//delete
delete user.isAdmin;
console.log(user);

//"likes birds": true  // multiword property name must be quoted

//The last property in the list may end with a comma:
//That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.

//above access method is dot notation

//using square brackets
//bcz For multiword properties, the dot access doesn’t work:
console.log(user["age"]); 
//identifier must be in " " or ' '

//We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// https://javascript.info/object#computed-properties
//The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit

//property value shorthand
//https://javascript.info/object#property-value-shorthand
// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }
// function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age,  // same as age: age
//       // ...
//     };
//   }

//except __proto__, property name can be reserved keywords also Other types are automatically converted to strings.

//There will be no error if the property doesn’t exist!
//Reading a non-existing property just returns undefined

// There’s also a special operator "in" for that.
// The syntax is:
// "key" in object

//The "for..in" loop
// for (key in object) {
//     //executes the body for each key among object properties
// }

for(key in user){
    console.log(key, user[key]);
}

//ordering in objects
//The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order.







