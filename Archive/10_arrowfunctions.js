// global object in browser is window

const arrowfun = (num1,num2) => {
    return num1 +num2;
}

console.log(arrowfun(4,5))

//implicit return method
const add = (n1,n2) => n1+n2
console.log(add(3,3))

//to return object wrap it in ()


//immidietly invoked function expression
//why -> for database connection, to avoid polluting global scope variable

(function func(){
    console.log(`DB connected`);
})();
