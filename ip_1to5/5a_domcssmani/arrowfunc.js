//Arrow function with no argument

let greet = () => console.log('Hello');
greet(); 

//Arrow function with one argument

let greeting = x => console.log(x);
greeting('Hello'); 

//Arrow function as an expression

let age = 5;
let welcome = (age < 18) ?
() => console.log('Not Eligible'):
() => console.log('Eligible for Voting');
welcome();

//Multiline Arrow functions

let sum = (a, b) => {
    let result = a + b;
    return result;
    }
    let result1 = sum(5,7);
    console.log(result1);