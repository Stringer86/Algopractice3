// You have to create a method "compoundArray" which should take as input
// two int arrays of different length and return one int array with
// numbers of both arrays shuffled one by one.
// Example:
// compoundArray([1,2,3,4,5,6],[9,8,7,6]) => [1,9,2,8,3,7,4,6,5,6];

// To test:
// npm install
// npm test

function compoundArray(arr1, arr2) {
  let arr = [];

  let length = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < length; i++) {
    if (arr1[i]) {
      arr.push(arr1[i])
    }
    if (arr2[i]) {
      arr.push(arr2[i])
    }
  }

  return arr;
}

module.exports = {
  compoundArray: compoundArray,
};
