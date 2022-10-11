/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:


***********************************************************************/


// function reverse(str) {
//   // base case
//   if (str.length <= 1) {
//     return str;
//   } else {
//     return str.charAt(str.length - 1) + reverse(str.slice(0, str.length - 1))
//   }
// }

function reverse(str) {
  // base case
  if (str.length <= 0) {
    return str;
  } else {
    let lastChar = str.slice(str.length - 1);
    let restOfStr = str.slice(0, str.length - 1);
    return lastChar + reverse(restOfStr); // recursive step
  }
}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
