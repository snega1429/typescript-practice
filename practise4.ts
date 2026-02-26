//use maps() double in an array
let numbers : number[] = [1, 2, 3, 4];
let doubled: number[] = numbers.map((num: number): number => {
    return num * 2;
});
console.log(doubled);


//use filters() in even number
let numbersEven: number[] = [1, 2, 3, 4];
let evenNumbers: number[] = numbersEven.filter((num: number) => {
    return num % 2 == 0;
});
console.log(evenNumbers);


//use filter() users above age 18.
interface User {
    name : string;
    age : number;
}

let users: User[] = [
    {name : "Sandhya", age : 10},
    {name : "Prabu", age : 25},
    {name : "Pooja", age : 19},
];
let adults: User[] = users.filter((user: User) => {
    return user.age > 18;
});
console.log(adults);



//use Reduce() to calculate total sum of array
let numbersSum: number[] = [10, 20, 30, 40];
let total: number = numbersSum.reduce((sum: number, num: number): number => {
    return sum + num;
}, 0);
console.log(total); 



//Convert array of names into uppercase using map()
let names: string[] = ["sandhya", "prabu", "pooja"];
let upperNames: string[] = names.map((name: string): string => {
    return name.toUpperCase();
});
console.log(upperNames);