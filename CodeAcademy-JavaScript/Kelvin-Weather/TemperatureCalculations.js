/* 
Program Name: Temperature Calculations
Programer Name: Talha Tallat
Program description: Convert Kelvin to Celsius, then to Fahrenheit and celsius to the Newton scale
*/

//Vary the kelvin values to see the change in temperatures. 
const kelvin = 0;

//convert Kelvin to Celsius by subtracting 273 from the kelvin variable
let celsius = kelvin - 273;

//Used string interpolation to log the temperature in Celsius to the console
console.log(`The temperature is ${celsius} degrees Celsius.`);

//used equation to calculate Fahrenheit
//Used the .floor() method from the built-in Math object to round down the Fahrenheit temperature
let fahrenheit = Math.floor(celsius * (9/5) + 32);

//Used string interpolation to log the temperature in fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Converted celsius to the Newton scale using the equation
//Used the .floor() method to round down the Newton temperature 
let newton = Math.floor(celsius * (33/100));

//Used console.log and string interpolation to log the temperature in newton to the console
console.log(`The temperature is ${newton} degrees Newton Meter.`);
