// Write a function named validate that takes in a string of text representing some
// code filled with parentheses (), brackets [], and curly braces {}.
//
// (, {, [ are called "openers." ), }, ] are called "closers."
//
// The function returns true if the input strings openers are matched in properly
// nested with the closers.
//
// Examples:
//
// "{ }" should return true (properly nested and matched) "{ [ ( ] ) }"
// should return false (closing bracket before closing parentheses) "{ [ }"
// should return false (no closing bracket) "}" should return false (no opening curly brace)

// To test:
// cd 03-matching
// npm install
// npm test


const validate = function(str) {
  let openers = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  let closers = {
    ')': true,
    '}': true,
    ']': true
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (openers[char]) {
      stack.push(char)
    } else if (closers[char]) {
      if (openers[stack.pop()] !== char) return false;
    }
  }

  return stack.length === 0;

};

module.exports = validate;
