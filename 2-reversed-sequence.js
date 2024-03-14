//Coding Challenge 2024
//2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

// reverseSeq = (n) => {
//     return Array.from({ length: n }, (_, i) => i + 1).reverse();
// }

// reverseSeq = (n) => {
//   return [...Array(n)].map((el, i) => i + 1).reverse();
// };

// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

const reverseSeq = (n) => 
    [...Array(n)].map((el, i) => n-i);

console.log(reverseSeq(5));
