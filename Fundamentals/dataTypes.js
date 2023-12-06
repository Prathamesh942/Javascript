// TLDR

// There are 8 basic data types in JavaScript.

// Seven primitive data types:
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers.
// And one non-primitive data type:
// object for more complex data structures.
// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.



//<------------------------------------------------------------------------------------------------>


//there are eight basic data types

//Number
let n = 10
//special numeric values
let inf = Infinity
let ninf = -Infinity
let nan = NaN
//alert( "not a number" / 2 ); NaN, such division is erroneous
//NaN is sticky. Any further mathematical operation on NaN returns NaN:

//Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
//The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.


//BigInt
//In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
//To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

const bigInt = 1234567890123456789012345678901234567890n;

//string
let name = 'prathamesh';
let greeting = `hello ${name}`;


//boolean
let val = true, anotherval = false;


//null
let age=null;
//nothing or unknown

//undefined
//The meaning of undefined is “value is not assigned”.
let myclass;

//object
//All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

//symbols
//The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

//The typeof operator returns the type of the operand.