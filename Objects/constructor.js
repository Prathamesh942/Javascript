// Constructor functions technically are regular functions. There are two conventions though:
// They are named with capital letter first.
// They should be executed only with "new" operator.

function Student(name){
    this.name=name;
    this.class='A';
}

let s1 = new Student('prathamesh');
console.log(s1);

// When a function is executed with new, it does the following steps:
// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.

// technically, any function (except arrow functions, as they don’t have this) can be used as a constructor

//refer here -> https://javascript.info/constructor-new#constructor-function to see how new keyword is used to create object once only

// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.
// But if there is a return statement, then the rule is simple:
// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.


//Normal functions in objects are used for actions or computations, while getter and setter methods provide controlled access to and modification of object properties.
//using get/set obj.prop using normal fun obj.fun()