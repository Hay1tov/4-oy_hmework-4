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
//                                      No_13
//                                      No_14
//                                      No_15
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