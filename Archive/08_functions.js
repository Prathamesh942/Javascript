function sayhello(){
    console.log("Hello");
}

function add(num1,num2){
    return num1+num2;
}

sayhello();
console.log(add(2,2));


//... is called rest operator
function calc(...args){
    return args
}
console.log(calc(200,100,300,400));

//object as an argument
function showcart(cart){
    console.log(`${cart.item} ${cart.price}`);
}

showcart({
    item : "carrot",
    price:20
})

//array as an argument
function showsecond(arr){
    return arr[1];
}
console.log(showsecond([1,2,3,4]))
