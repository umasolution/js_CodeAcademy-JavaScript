/*
  Programmer Name: Talha Tallat
  Program Name: Whale Talk - Loops 
  Program Description: The project takes a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
                       There are a few simple rules for translating text to whale language:
                            * There are no consonants. Only vowels excluding “y”.
                            * The u‘s and e‘s are extra long, so we must double them in our program.
                       Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

//Created a variable named input that is equal to string. This variable will contain the text user want to translate into “whale talk”.
let input = 'a whale of a deal!';
//Whales only speak in vowels so an array of vowels to be extracted from the input variable. Seted the array equal to a variable named vowels that will not be updated.
//Note: Whales don’t consider “y” a vowel.
const vowels = ['a', 'e', 'i', 'o', 'u'];
//Created a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
let resultArray = [];
//Created a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
//Created a nested for loop inside of the for loop just wrote. Made the inner loop iterate through the vowels array each time the outer loop runs.
//This will enable to check each letter of input against all the vowels elements during each iteration.

/*for (const characters of input) {
  console.log(characters);
  for (const elements of vowels) {
  console.log(elements);
}
}*/
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      //Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.
      if (input[i] === vowels[j]){
          resultArray.push(input[i]);
      };
  //Whales double their e‘s and the u‘s in their language.
//Wrote an if statement that checks if each letter in the input string is equal to 'e' or 'u. If so, .push() input[i] to the resultArray.
//Note, this statement belongs after the inner for loop block inside the outer for loop. This is because only want to perform this check once for every letter in the input.  
  if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
    resultArray.push(input[i]);
    break;
};
    }
};
//Notice when logging the array, the output has commas between each letter. To produce proper whale language, we want to capitalize the array elements and put them together as one string.
console.log('whale version would read: '+resultArray.join('').toUpperCase());

//Testing 
//Run the program and sing the output out loud — you officially speak whale!

//To confirm, if you change the value of input to ‘turpentine and turtles’, the whale version would read: 'UUEEIEEAUUEE'.

//Try other tests like 'Hi, Human' (to get IUUA) or 'a whale of a deal!' (to get 'AAEEOAEEA').

