//Coding Challenge 2024
//12/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

const arrayPlusArray = (a, b) => a.concat(b).reduce((acc, num) => acc + num, 0);

// function arrayPlusArray(a, b) {
//   let result = 0;
//   for (let i = 0; i < a.length; i++) {
//     result += a[i];
//   }

//   for (let i = 0; i < b.length; i++) {
//     result += b[i];
//   }
//   return result;
// }

// function arrayPlusArray(a, b) {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       result += arguments[i][j];
//     }
//   }
//   return result;
// }

// function arrayPlusArray(arr1, arr2) {
//   return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
// }

// const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
