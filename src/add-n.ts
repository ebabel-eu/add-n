'use strict';

let increment = null;

/**
 * addN is a function that initially takes a number and
 * assign it to an increment variable.
 * Calling the function again will add any number to the
 * increment and return the result.
 * @param {number} n Initially the increment, and in further
 * calls, the number to add to the increment.
 * @example
 * const addEight = addN(8);
 * console.log(addEight(7));  // 15.
 */
const addN = (n: number) => {
  if (increment === null) {
    increment = n;
    return addN;
  }

  return n + increment;
};

export { addN };
