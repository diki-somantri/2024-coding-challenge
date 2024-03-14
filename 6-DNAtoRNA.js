//Coding Challenge 2024
//6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

// const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// function DNAtoRNA(dna) {
//     return dna.replace(/T/g, "U");
// }

// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") {
//       rna += "U";
//     } else {
//       rna += dna[i];
//     }
//   }
//   return rna;
// }

// ternary
// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] == "T" ? "U" : dna[i];
//   }
//   return rna;
// }

// split metode
// function DNAtoRNA(dna) {
//   return dna.split("T").join("U");
// }

// function DNAtoRNA(dna) {
//   return dna
//     .split("")
//     .map((el) => (el === "T" ? "U" : el))
//     .join("");
// }
console.log(DNAtoRNA("TTTT"));
