/* Part Two - I'm MohammadMahdi Zamanian <mm25zamanain@gmail.com> @MM25Zamanian */

/**
 * Multiplication function of two numbers together (return a function for multiplication)
 *
 * @example
 * const getNumber = myFunction2(2, 5);
 * const number = getNumber();
 * console.log(typeof getNumber); // function
 * console.log(typeof number); // number
 * console.log(number); // (2 * 5) = 10
 */
function myFunction2(number1:number, number2:number):() => number {
  return function() {
    return number1 * number2;
  };
}

const getNumber = myFunction2(10, myFunction2(2, 5)());
const number = getNumber();

console.log(typeof getNumber); // function
console.log(typeof number); // number
console.log(number); // (2 * 5) = 10
