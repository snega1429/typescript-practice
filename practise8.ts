//print numbers 1 to 50
for (let i: number = 1; i <= 50; i++) {
    console.log(i);
}


//multiplication 
let num: number = 5;
for (let i: number = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


//sum from 1 to N
let n: number = 5;
let i: number = 1;
let sum: number = 0;
 while (i <= n) {
    sum += i;
    i++;
 }
 console.log("Sum =", sum);


 //Iterate object using for in.
 interface Person {
    name: string;
    age: number;
    city: string;
 }
 let person: Person = {
    name: "Sandhya",
    age: 9,
    city: "Chennai"
};

for (let key in person) {
    console.log(key, ":", person[key as keyof Person]);
}


//iterate array for of.
let numbers: number[] = [10, 20, 30, 40, 50];
for (let value of numbers){
    console.log(value);
}