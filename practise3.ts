//Arrow function into normal function
//normal function
function greet(name: string): string {
    return "Hello" + name;
}
console.log(greet("Sandhya"));


//Arrow function
const greetArrow = (name: string): string => {
    return "Hello" + name;
}
console.log(greetArrow("Sandhya"));


//Arrow function add two number
const add = (a: number, b: number): number => {
    return a + b;
}
console.log(add(5, 3));


//callback function
function greetCallback(name: string, callback: () => void): void {
    console.log("Hi" + name);
    callback();
}
function sayBye() {
    console.log("Bye!");
}
greetCallback("Sandhya", sayBye);


//function that return another function
function outer(): () => void{
    return function inner(): void {
        console.log("Inner function excuted");
    }
}
const result = outer();
result();
