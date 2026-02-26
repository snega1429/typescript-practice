//user and update
interface User {
    name: string;
    age: number;
    city: string;
}
const user1: User = {
    name : "Sandhya",
    age : 9,
    city : "chennai"    
};
console.log("Before update:", user1);
user1.age = 10;
console.log("After update:", user1);


//clone an object using spread operator
interface UserClone {
    name: string;
    age: number;
}
const user2: UserClone = {
    name : "Sandhya",
    age : 9
};
const clonedUser: UserClone = {...user2};
clonedUser.age = 10;
console.log("Original:", user2);
console.log("Cloned:", clonedUser);


//freeze an object
interface FrozenUser {
    name: string;
    age: number;
}
const user3: FrozenUser = {
    name: "Sandhya",
    age: 9
};
Object.freeze(user3);
console.log(user3);



//deep copy function
interface Address {
    city: string;
}
interface UserDeep {
    name: string;
    address: Address;
}
function deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}
const user4: UserDeep = {
    name: "Sandhya",
    address: {
        city: "Chennai"
    }
};
const clonedDeepUser: UserDeep = deepCopy(user4);
clonedDeepUser.address.city = "Mumbai";
console.log("Original:", user4.address.city); 
console.log("Cloned:", clonedDeepUser.address.city); 
