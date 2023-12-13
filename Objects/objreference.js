//One of the fundamental differences of objects versus primitives is that objects are stored //and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are //always copied “as a whole value”

//A variable assigned to an object stores not the object itself, but its “address in 
//memory” – in other words “a reference” to it.

//Comparison by reference
//Two objects are equal only if they are the same object.

//An important side effect of storing objects as references is that an object declared as 
//const can be modified.

//cloning the object
//let clone = {}; // the new empty object
// let's copy all user properties into it
//for (let key in user) {
//  clone[key] = user[key];
//}

//Object.assign(dest, ...sources) copies properties of source objects into destination
//If the copied property name already exists, it gets overwritten:

//let clone = Object.assign({}, user);

//cloning for nested objects i.e value is object in object will not work
//bcz nested objects will share same reference
//to fix that use deep cloning or structured clone
//js provide method for that called structuredClone 
//in the hood it examine if each value of key is object or not if its object then replicate
//it as well
//it support circular reference as well!

//Function properties aren’t supported.
//To handle such complex cases we may need to use a combination of cloning methods, write 
//custom code or, to not reinvent the wheel, take an existing implementation, for instance
//_.cloneDeep(obj) from the JavaScript library lodash.

