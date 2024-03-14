//Coding Challenge 2024
//9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

// var min = function (arr) {
//   return Math.min(...arr);
// };
// var max = function (arr) {
//   return Math.max(...arr);
// };

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// const min = (arr) => arr.sort((a, b) => a - b)[0];
// const max = (arr) => arr.sort((a, b) => b - a)[0];

// var min = function (arr) {
//     return Math.min.apply(null, arr);
// }
// var max = function (arr) {
//     return Math.max.apply(null, arr);
// }

// var min = function (arr) {
//   let minValue = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minValue) {
//       minValue = arr[i];
//     }
//   }
//   return minValue;
// };
// var max = function (arr) {
//   let maxValue = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//     }
//   }
//   return maxValue;
// };

console.log(min([1, 2, 3, 4]));
console.log(max([1, 2, 3, 4]));
