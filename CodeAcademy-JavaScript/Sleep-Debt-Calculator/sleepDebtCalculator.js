/*
  Programmer Name: Talha Tallat
  Program Name: Sleep Debt Calculator 
  Program Description: This project calculates if you’re getting enough sleep each week using a sleep debt calculator.
                       The program will determine the actual and ideal hours of sleep for each night of the last week.
                       Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

// The first problem to solve is determining how many hours of sleep user got each night of the week.
// created a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), wrote one function with a parameter for the day.
// Created a function named getSleepHours with a single parameter named day.
const getSleepHours = (day) =>{
  //The function accepts a day as an argument and returns the number of hours user slept that night.
  //For instance, if user got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.
  //Used an if/else or switch statement to implement this.
  if(day === 'monday'){
    return 8;
  }else if(day === 'tuesday'){
    return 7;
  }else if(day === 'wednesday'){
    return 6;
  }else if(day === 'thursday'){
    return 5;
  }else if(day === 'friday'){
    return 4;
  }else if(day === 'saturday'){
    return 3;
  }else if(day === 'sunday'){
    return 2;
  }
};
// for testing the first funnction 
//console.log(getSleepHours('sunday'));

//we need to do three things:
//Get the total sleep hours that you actually slept
//Get the ideal sleep hours that you prefer
//Calculate the sleep debt, if any.
//To get the total sleep hours that you actually slept, created a new function named getActualSleepHours that takes no parameters and inside the getActualSleepHours() function, called the getSleepHours() function for each day of the week. Added the results together and returned the sum using an implicit return.
const getActualSleepHours = () =>{
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

//To get the ideal sleep hours that you prefer, created a function named getIdealSleepHours with no parameters.
//Inside the function, declared a variable named idealHours and set its value to users ideal hours per night. Then returned the idealHours multiplied by 7, to multiply by 7 to get the total hours you prefer per week.
const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours * 7;
};

//Test two new functions
//console.log('Actual sleeping hours per week: ' + getActualSleepHours());
//console.log('Ideal sleeping hours per week: ' + getIdealSleepHours());


//it’s time to calculate sleep debt.
//Created a function named calculateSleepDebt with no parameters.
//Inside of its block, created a variable named actualSleepHours seted equal to the getActualSleepHours() function call.
//Then, create another variable named idealSleepHours, seted equal to the getIdealSleepHours() function call.
const calculateSleepDebt =() => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

//The function should fulfill this logic:
//If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
//If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
//If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
//To make this calculator more helpful, added the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().
  if (actualSleepHours === idealSleepHours){
  console.log(`\nYou got ${idealSleepHours - actualSleepHours} hours of sleep this week!`)
}else if (actualSleepHours > idealSleepHours){
  console.log(`\nYou got ${idealSleepHours - actualSleepHours} hours more sleep than needed this week!`)
}else if (actualSleepHours < idealSleepHours){
  console.log(`\nYou got ${idealSleepHours - actualSleepHours} hours less sleep than you needed this week. Get some rest!`)
}
};
//Started the program by calling the calculateSleepDebt() function.
calculateSleepDebt()



//For extra practice, try these:
//getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.
//Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.
//To see the solutions, open the hint.

//hint:
//Put the daily sleep hours directly into getActualSleepHours().

//const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
//Make idealHours a parameter and multiply it by 7.

//const getIdealSleepHours = idealHours => idealHours * 7;
//When you call the updated function in calculateSleepDebt(), call it like this:

//const calculateSleepDebt = () => {
  //...
  //const idealSleepHours = getIdealSleepHours(8);
  //...
//};
