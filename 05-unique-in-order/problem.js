/*
Implement the function uniqueInOrder which takes in a string and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

Examples:

uniqueInOrder('')                // []
uniqueInOrder('AAAABBBCCDAABBB') // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         // ['A', 'B', 'C', 'c', 'A', 'D']
*/
function uniqueInOrder(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (i === (str.length - 1) ) {
      if (str[i] !== arr[arr.length - 1]) {
        arr.push(str[i])
      }
    } else if (str[i] !== str[i + 1]) {
      arr.push(str[i]);
    }
  }

  return arr;
}

module.exports = uniqueInOrder;
