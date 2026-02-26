//Print numbers from 1 to 50 using for loop
for ( let i: number = 1; i <= 50; i++ ) {
console.log(i);
}


//Print multiplication table of a number
let num: number = 5;
for (let i: number = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
    


//Sum numbers from 1 to N using while loop
 let n: number = 5;
 let i: number = 1;
 let sum: number= 0;
 while(i <= n) {
    sum = sum + i;
    i++;
 }
 console.log("sum =", sum);


 //Iterate over object keys using for...in.
 interface Person {
    name: string;
    age: number;
    city: string;
 }
 let Person: Person = {
    name : "Sandhya",
    age : 9,
    city : "chennai",
 };
 
 for(let key in person) {
   console.log(key, ":", Person[key as keyof Person]);
 }


 //Iterate over array using for...of
 let numbers: number[] = [10, 20, 30, 40, 50];
 for(let value of numbers) {
    console.log(value);
 }
