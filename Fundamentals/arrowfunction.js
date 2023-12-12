//let func = (arg1, arg2, ..., argN) => expression;
let sum = (a,b) => console.log(a+b);
sum(2,2);
// let sum2 = (a,b) => {return a+b};
//dont need to use return 
let sum2 = (a,b) => a+b;
console.log(sum2(2,2));
//make even shorter! by omitting parentheses if single parameter
let square = n => n*n;
console.log(square(8));
//if no argument then parentheses must be empty but should present


// let age = prompt("What is your age?", 18);
// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert("Greetings!");
// welcome();

//for multiline functions use braces