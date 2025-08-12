//                                      No_1

// let n = 5  //  1 <= n <= 26  oralig'ida son kiritiladi
// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let result = alphabet.slice(0, n);
// console.log(result);


//                                      No_2


// function belgiTuri(symbol) {
//   if (symbol >= "0" && symbol <= "9") {
//     return "digit";
//   } else if (
//     (symbol >= "A" && symbol <= "Z") ||
//     (symbol >= "a" && symbol <= "z")
//   ) {
//     return "lotin";
//   } else {
//     return 0;
//   }
// }

// console.log(belgiTuri("@"));


//                                      No_3


// function ascii(s) {
//   if (typeof s !== "string" || s.length === 0) {
//     return null;
//   }
//   const firstCode = s.charCodeAt(0);
//   const lastCode = s.charCodeAt(s.length - 1);
//   return { first: firstCode, last: lastCode };
// }

// console.log(ascii("Hello world"));


//                                      No_4


// function getText(N, symbol) {
//   let text = ''
//   for (let i = 1; i <= N; i++) {
//     text += symbol
//   }
//   return text
// }
// console.log(getText(5, 'A'));


//                                      No_5


// function getReverse(text) {
//   let result = ''
//   for(let i = text.length - 1; i >= 0; i--) {
//     result += text[i]
//   }
//   return result
// }

// console.log(getReverse('nima gap'));


//                                      No_6


// function getStringStars(text, N) {
//   let stars = "*";
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     result += text[i];
//     if (i < text.length - 1) {
//       result += stars;
//     }
//   }
//   return result;
// }

// console.log(getStringStars("Salom", 1)); 


//                                      No_7

// function getNumber(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(getNumber('S1a23lom'));


//                                      No_8


// function getLowerLetterCount(str) {
//   let count = 0;
//   for (let ch of str) {
//     if ((ch >= "a" && ch <= "z") || (ch >= "а" && ch <= "я")) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(getLowerLetterCount("Salom"));


//                                      No_9


// function getLower(str) {
//   let result = "";
//   for (let ch of str) {
//     if (ch >= "A" && ch <= "Z") {
//       result += ch.toLowerCase();
//     } else {
//       result += ch;
//     }
//   }
//   return result;
// }

// console.log(getLower("Salom Dunyo"));


//                                      No_10


// function getLower(str) {
//   let result = "";
//   for (let letter of str) {
//     if (letter >= "A" && letter <= "Z") {
//       result += letter.toLowerCase();
//     } else if (letter >= "a" && letter <= "z"){
//       result += letter.toUpperCase();
//     }
//     else {
//       result += letter
//     }
//   }
//   return result;
// }

// console.log(getLower("Salom Dunyo"));

//                                      No_11


// function NumberType(str) {
//   if (!isNaN(str) && str.trim() !== "") {
//     if (str.includes(".")) {
//       return 2;
//     } else {
//       return 1;
//     }
//   }
//   return 0;
// }

// console.log(NumberType("123"));


//                                      No_12


// const getReverseNumber = (n) => {
//   let reverse = ''
//   let birlik = 0
//   while(n != 0) {
//     birlik = n % 10
//     reverse += birlik
//     n = Math.floor(n / 10)
//   }
//   return reverse
// }

// console.log(getReverseNumber(12345));


//                                      No_13


// function calc(expr) {
//   let parts = expr.split(" ");
//   let result = parseInt(parts[0]);

//   for (let i = 1; i < parts.length; i += 2) {
//     let op = parts[i];
//     let num = parseInt(parts[i + 1]);
//     if (op === "+") {
//       result += num;
//     } else if (op === "-") {
//       result -= num;
//     }
//   }
//   return result;
// }

// console.log(calc("70 + 30 - 50"));


//                                      No_14


// function mergeStrings(S1, S2, N1, N2) {
//   let part1 = S1.slice(0, N1);
//   let part2 = S2.slice(S2.length - N2);
//   return part1 + part2;
// }

// console.log(mergeStrings("Salom", "Dunyo", 3 , 2));


//                                      No_15


// function satr(C, S) {
//   let result = '';

//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === C) {
//       result += C + C;
//     } else {
//       result += S[i];
//     }
//   }
//   return result;
// }

// console.log(satr('a', 'ali vali'));


//                                      No_16




//                                      No_17
//                                      No_18
//                                      No_19
//                                      No_20
//                                      No_21
//                                      No_22
//                                      No_23
//                                      No_24
//                                      No_25
//                                      No_26
//                                      No_27
//                                      No_28
//                                      No_29
//                                      No_30