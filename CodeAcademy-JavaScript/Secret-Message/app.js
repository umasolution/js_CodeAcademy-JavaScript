/*
Program Name: Secret-Message - Array common operations - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Programmer Name: Talha Tallat
Program description: Using array methods, to transform an array of strings into a secret message!
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Remove an item from the end of an Array
secretMessage.pop();

//To add the strings to the end of array
secretMessage.push('to', 'Program');

//Changed the word 'easily' to the word 'right' by accessing the index and replacing it
secretMessage[7] = 'right';

//Used an array method to remove the first string of the array.
secretMessage.shift();
//Used an array method to add the string 'Programming' to the beginning of the array.
secretMessage.unshift('Programming');

// this is how to remove items, 'number' defines the number of items to be removed,
// starting at the index position specified by 'position' and progressing toward the end of array.
let position = 6;
let number = 5;
let removedItems = secretMessage.splice(position, number, 'know,');

//Joins all elements of an array into a string.
console.log(secretMessage.join(' '))

//Testing
//console.log(secretMessage.length);
//console.log(secretMessage);
