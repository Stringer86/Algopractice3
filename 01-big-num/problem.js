
// I LIKE BIG NUMS AND I CANNOT LIE

// Write

// function biggest(nums)

// that given an array of numbers >= 0, will arrange them
// such that they form the biggest number.

// For example:

// biggest([1, 2, 3]) === '321'
// biggest([3, 30, 34, 5, 9]) === '9534330'

// The results will be large so make sure to return a string.

// To test:
// cd 01-big-num
// npm install
// npm test


function bigNum(nums) {
  let sorted = nums.sort()

  // for (let i = 0; i < sorted.length; i++) {
  //   if (sorted[i] > 11) {
  //     let str = sorted[i].toString();
  //     let arr = str.split('')
  //     let sorted2 = arr.sort((a, b) => {
  //       return b - a;
  //     })
  //
  //     sorted[i] = sorted2.join('');
  //   }
  // }
  console.log(sorted);
  return sorted.reverse().join('');
}

module.exports = {
 bigNum
}
