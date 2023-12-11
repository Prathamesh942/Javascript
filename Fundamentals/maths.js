//operator - unary,binary

//string concatenation
console.log(2+2+2+'1');
console.log('1'+2+2+2);
// 61
// 1222
//all operands after string will be treated as string

//only for '+' javascript works this way for other 
//it convert string to number

console.log('6' - '2');
console.log('5' / '2');
console.log('5' / 2);


//'+' in unary converts non number to number
//ex
console.log(+"");
//0
//same as Number() but shorter

let apples = "2";
let oranges = "3";
console.log(apples + oranges);
console.log(+apples + +oranges);
//23
//5

//let c = 3 - (a = b + 1); here expression return value after assigned to a

//a=b=c=2+2 chaining assignments

// bitwise
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

//comparison
//equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

