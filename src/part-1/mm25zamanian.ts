/* Part One - I'm MohammadMahdi Zamanian <mm25zamanain@gmail.com> @MM25Zamanian */

/**
 * Function for multiplying two numbers together
 *
 * @example
 * const number = myFunction(10, 5);
 * console.log(number); // 50
 * console.log(typeof number); // number
 */
function myFunction(number1:number, number2:number):number {
  return number1 * number2;
}

/* Simple example */
console.log(myFunction(5, 4)); // 20

/* A complex example */
console.log(myFunction(5, myFunction(4, 3))); // 60
