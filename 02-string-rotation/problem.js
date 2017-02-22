/*
Write a function named isRotation that takes in two strings, s1 and s2. It returns a boolean specifically if s2 is a rotation of s1, it returns true, otherwise, return false.
A rotation of strings is where a string is split into two at some point and are concatenated together in opposite order. For example. cdeab is a rotation of abcde since abcde split into ab and cde and were put in the opposite order.
*/

function isRotation(s1, s2) {

  let str1 = s1.split('').sort().join();
  let str2 = s2.split('').sort().join();

  if (str1 === str2) return true;

  return false;


}


module.exports = isRotation;
