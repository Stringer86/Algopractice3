/*
Write a function named unfactorial that takes a number and returns a string representing it's base factorial in the form: 'n!'.
In otherwords un-do the factorial operation if possible. Return null if no factorial was possible.

A factorial operation looks like this:
5! = 5 * 4 * 3 * 2 * 1 = 120

function output:
unfactorial(120) // '5!'
unfactorial(150) // null
unfactorial(5040) // '7!'
*/
function unfactorial(n) {
  if (typeof n !== 'number') return null;
  
  let counter = 2;
  let num = n;

  while (num % 1 === 0 && num !== 1) {
    num = num / counter;
    counter++;
  }

  if (num % 1 !== 0) return null;

  counter = counter - 1;
  return counter.toString() + '!';

}

module.exports = unfactorial;
