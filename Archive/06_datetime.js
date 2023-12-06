//Date is object
//it encapsulates number that represent milliseconds ellapsed since 1 jan 1970

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

let birthday = new Date(2004,3,9);
console.log(birthday.toDateString())

let myTimeStamp = Date.now();
console.log(myTimeStamp.toLocaleString());
