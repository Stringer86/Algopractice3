
// Implement the function longest(array,n) where you
// will be given an array of strings and then return
// the nth longest string in that array. e.g.
// arr = ['Hello','World','Flapjack','Quick'] n = 3;
// should return 'World' because 'Flapjack' length = 8 ,
// 'Hello' length = 5, so that is the 2nd longest word and
// then 'World' (although also word length of 5, 'World'
// is after 'Hello' in the array).


// When words have the same lengths, treat them in the order
// in which they exist in the array. Array will never be
// empty and n > 0 always.

function longest(arr, n) {

  const checkAll = (e) => {
    return e.length === 1;
  }

  for (let i = 0; i < arr.length; i++) {
    let tracker = true;

    if (!checkAll(arr[i])) {
      break;
    } else if (i === arr.length -1) {
      return arr[n - 1];
    }
  }

  let sorted = arr.sort((a, b) => {
    return b.length - a.length;
  })

  return sorted[n - 1];

}


module.exports = {
 longest: longest,
}
