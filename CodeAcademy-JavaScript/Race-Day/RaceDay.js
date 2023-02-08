/*
  Programmer Name: Talha Tallat
  Program Name: Race Day 
  Program Description: This program will register runners for the race and give them instructions on race day.
*/

//Race numbers are assigned randomly.
// Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

//In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000.

//Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().
let raceNumber = Math.floor(Math.random() * 1000);

//Created a variable that indicates whether a runner registered early or not and set to a Boolean value. 
//Change this later as you test different runner conditions.
const registeredEarly = true; 

//Created a variable for the runner’s age and set it equal to a number.
//Change this later as you test different runner conditions.
const age = 18; 

//Created a control flow statement that checks whether the runner is an adult AND registered early.
//Added 1000 to their raceNumber if this is true.
if ((age > 18) && (registeredEarly === true) ) {
  console.log(`Race number: ${raceNumber + 1000}`);
}

//Created a separate control flow statement that checks age and registration time to determine race time.
//For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.
if ((age > 18) && (registeredEarly === true) ) {
  console.log(`Early adults run at 9:30 am.`);
} 

//else if runner is over 18 AND did not register early they will race at 11:00am
//Wrote the corresponding else if statement, Within that, logs a string to the console telling them that they will race at 11:00 am with raceNumber.
else if ((age > 18) && (registeredEarly === false) ) {
  console.log(`Race number: ${raceNumber} \nLate adults run at 11:00 am`);
} 

//For people who are under 18 regardless of registration, logs a statement to the console telling them that they will race at 12:30 pm with their raceNumber.
else if ((age < 18) && (registeredEarly === false || true) ) {
  console.log(`Race number: ${raceNumber} \nYouth registrants run at 12:30 pm`);
}

//Added an else statement that logs a statement to the console telling the 18 year old runner to see the registration desk.
else {
  console.log(`Runners who are 18 years old should see the registration desk`)
}


//Enter different combinations of values for the two variables created and run code several times. 

//Check this working code using the examples provided in the hint.

//If code is working correctly, all of these should be true:

//Runners who are 25 years old and registered early will run at 9:30 am.
//Runners who are 25 years old and did NOT register early will run at 11:00 am.
//Runners who are 16 years old and registered early will run at 12:30 pm.
//Runners who are 16 years old and did NOT register early will run at 12:30 pm.
