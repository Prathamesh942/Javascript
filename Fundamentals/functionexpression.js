//no matter how the function is created, a function is a value.
//function is stored in variable whether its through function declaration or function expression

sayhello = function() {
    console.log("hellow");
};

sum = function(a,b){
    console.log("sum is");
    return a+b;
} 
console.log(sayhello);
//[Function: sayhello]
console.log(sayhello());
//hellow
//undefined
console.log(sum(10,10));
//sum is
//20

//semicolon is not part of function syntax but of expression's

//callback functions
//The idea is that we pass a function and expect it to be “called back” later if necessary

function sayhii(){
    console.log("hii");
}

function greet(hello,sayhellow,sayhiiw){
    if(hello){
        sayhellow();
    }else{
        sayhiiw();
    }
}

greet(0,sayhello,sayhii);

//Function Expression vs Function Declaration
//A Function Expression is created when the execution reaches it and is usable only from that moment.
//A Function Declaration can be called earlier than it is defined.

//function expression (assigned to global variable is accessible everywhere even if 
//it is declared in block) but function declaration is not

