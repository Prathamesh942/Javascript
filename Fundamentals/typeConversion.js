// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(typeof value);

// let str = '1234';
// let num = Number(str);
// console.log(typeof num, num);

// rules -> undefined - NaN, null - 0, boolean - BigInt64Array, sting - trims if empty 0 else read number error ? NaN;
// let age = Number("an arbitrary string instead of a number");
// console.log(age); // NaN, conversion failed

//boolean 0 false else true empty string 0;
console.log(Boolean(''));
console.log(Boolean('hii'));
console.log(Boolean('0'));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(-10));