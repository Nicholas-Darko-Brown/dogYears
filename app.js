//My age
const myAge = 24;
//Early years in a dog's life
let earlyYears = 2;
earlyYears *= 10.5;
//Subtract 2 from myAge
let laterYears = myAge - 2;
//Multiply lateYears by 4
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);
//Adding earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
let myName = "Nicholas Brown";
//Returns a string with all lowercase
console.log(myName.toLowerCase());
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
