/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

// Q1

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log("Pop");
  }
}

fizzBuzz(49);
fizzBuzz(55);
fizzBuzz(120);
fizzBuzz(9999);

/* Q2. Create a function called averager that gets the average of an array. */
//let result = averager(prices);
//console.log(result);

// Q2

const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
let sum = 0;

function averager(prices) {
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  let avg = sum / prices.length;
  return avg;
}

let result = averager(prices);
console.log(result);

/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);
*/

function celToFah(cel) {
  let fah = (cel * 9) / 5 + 32;
  return fah.toFixed(2);
}

function celToKel(cel) {
  let kel = cel + 273.15;
  return kel.toFixed(2);
}

console.log(celToFah(37.5));
console.log(celToFah(-40));
console.log(celToFah(0));
console.log(celToFah(100));
console.log(celToKel(173.13));
console.log(celToKel(-13));

/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/
