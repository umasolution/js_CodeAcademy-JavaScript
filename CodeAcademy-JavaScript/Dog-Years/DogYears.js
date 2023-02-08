/*
  Programmer Name: Talha Tallat
  Program Name: Dog Years 
  Program Description: This program converts age from “human years” to “dog years” 
                       *  The first two years of a dog’s life count as 10.5 dog years each.
                       *  Each year following equates to 4 dog years.
*/

//variable named myAge, to set it equal to your age as a number.
const myAge = 22; 
//value of the variable (earlyYears) will vary 
let earlyYears = 2; 
//Multiplyed the value saved to earlyYears by 10.5 and reassigned it to earlyYears.
earlyYears = earlyYears * 10.5; 
//Took the myAge variable, and subtracted 2 from it and Sets the result equal to a variable called laterYears.
let laterYears = myAge - 2; 
//Multipled the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.
laterYears = laterYears * 4;

//Checking work by printing earlyYears and laterYears to the console
console.log('earlyYears: ' +  earlyYears);
console.log('laterYears: ' +  laterYears);

//variable named myAgeInDogYears stores earlyYears and laterYears added.
let myAgeInDogYears = earlyYears + laterYears;
//Displays name as a string & The toLowerCase method returns a string with all lowercase letters.
let myName = 'TALHATALLAT'.toLowerCase();
//Displays name and age in dog years.
console.log(`\nMy name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
