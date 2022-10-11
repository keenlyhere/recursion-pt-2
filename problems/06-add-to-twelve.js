/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:


***********************************************************************/


// function addToTwelve(arr) {
//   if (arr.length === 0) {
//     return false;
//   } else {
//     if (arr[0] + arr[1] === 12) {
//       return true;
//     } else {
//       arr.shift();
//       return addToTwelve(arr);
//     }
//   }
// }

function addToTwelve(arr) {
  // base case
  if (arr.length <= 1) return false;

  // recursive case
  // if array has at least two elements
  if (arr[0] + arr[1] === 12) {
    return true;
  } else {
    //recursive step
    arr.shift();
    return addToTwelve(arr)
  }
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
