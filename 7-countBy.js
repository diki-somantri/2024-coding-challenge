//Coding Challenge 2024
//7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//   let z = [];
//   for (let i = x; i <= x * n; i += x) {
//     z.push(i);
//   }
//   return z;
// }

const countBy = (x, n) => Array.from({ length: n }, (_, i) => x * (i + 1));

// function countBy(x, n) {
//   return Array.from({ length: n }, (_, i) => x * (i + 1));
// }

// function countBy(x, n) {
//   return [...Array(n).keys()].map((i) => (i + 1) * x);
// }

// const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(3, 10));
