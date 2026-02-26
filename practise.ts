//even or odd
let num : number = 7;
if(num % 2 == 0) {
    console.log(num + "is Even");
}else{
    console.log(num + "is Odd");
}


//Reverse a string
let text: string = "hello";
let reversedText: string = text.split("").reverse().join("");

console.log("Reversed:", reversedText);


//largest number in array
let arr: number[] = [10, 55, 9, 88, 34];
let largest: number = arr[0];

for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest number is:", largest);


//Factorial 
let number: number = 5;
let factorial: number = 1;

for (let i: number = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);


//palindrome
let word: string = "malayalam";
let reversedWord: string = word.split("").reverse().join("");

if (word === reversedWord) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


//vowel
let str: string = "Javascript";
let count: number = 0;
for (let i: number = 0; i < str.length; i++) {
    let char: string = str[i].toLowerCase();

    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {
        count++;
    }
}
console.log("Vowel count is:", count);


