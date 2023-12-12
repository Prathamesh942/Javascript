function sayhello() {
    console.log("hello");
}

function sayhelloto(name = "Prathamesh"){
    greeting = "good morning"
    console.log(`hello ${name + " " +  greeting}`);
}
sayhelloto();

//default value can also be another function
//alternative to default value is to compare par with undefined to check existence
//or can also use or to assign with something other

function sum(a,b){
    return a+b;
}
console.log(sum(1,1));
//A function with an empty return or without it returns undefined


