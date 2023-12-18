// object can store multiple values as properties even functions
// primitives and single valued data types
//thus objects are heavier


//there are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods
//but also we want primitives to be lightweight

//solution is object wrapper that provides the extra functionality is created, and then is destroyed.

// Here’s what actually happens in str.toUpperCase():
// The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
// That method runs and returns a new string (shown by alert).
// The special object is destroyed, leaving the primitive str alone.

//So primitives can provide methods, but they still remain lightweight.

//constructor for primitives is possible but not recommended