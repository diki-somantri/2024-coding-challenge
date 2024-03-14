//Coding Challenge 2024
//4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

function smash(words) {
  return words.join(" ");
}

// function smash(words) {
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     result += words[i];
//     if (i != words.length - 1) result += " ";
//   }
//   return result;
// }
// function smash(words) {
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     result += words[i] + " ";
//     if (i === words.length - 1) {
//       return result.trim();
//     }
//   }
// }

// const smash = (words) => words.join(" ");

console.log(smash(["hello", "world", "this", "is", "great"]));
