//common program for let, var, const.
function testScope( ): void {
    if (true) {
        var a: number = 10;
        let b: number = 20;
        const c: number = 30;
        console.log("Inside block:");
        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log("Outside block:");
        console.log(a);
}
testScope();


//blockScope example using let
function exampleLet(): void {
    if (true) {
        let b: number= 20;
        console.log("Inside block:", b); 
    }
}
exampleLet();


//blockscope example using constant
function exampleConst(): void {
    if (true) {
        const c: number = 30;
        console.log("Inside block:", c); 
    }
}
exampleConst();


//function scope example using var
function exampleVar(): void {
    if (true) {
        var a: number = 10;
    }

    console.log("Outside block using var:", a); 
}
exampleVar();



//block scope using let
function blockScopeExample(): void {
    if(true) {
        let message: string = "Hello";
        console.log("Inside block:", message);
    }
}
blockScopeExample();


//const object mutuation
const person : { name: string; age: number } = {
    name : "Sandhya",
    age : 9
};
console.log("Before change:", person);
person.age = 10;
console.log("After change:", person);
