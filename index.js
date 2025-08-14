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


// function newText(S1, S2, C) {
//   let result = ''
//   for (const harf of S1) {
//     if(harf === C) {
//       result += S2 
//     }
//     result += harf 
//   }
//   return result

// }

// console.log(newText('dunydo', 'salom', 'd'));


//                                      No_17


// function isRepeat(S1, S2) {
//   let count = 0
//   S1 = S1.split(" ")
//   for(const value of S1) {
//     if(value == S2) {
//       count++
//     }
//   }
//   return `${count} ta bor`
// }

// console.log(isRepeat('nima gap nima nima', 'nima'));


//                                      No_18


// function isDeleteWord(S1, S2) {
//   return S1.replace(S2, "");
// }

// console.log(isDeleteWord("Hello world ", "world"));


//                                      No_19


// function isDeleteALlWord(S1, S2) {
//   return S1.replaceAll(S2, "");
// }

// console.log(isDeleteWord("Hello world Hello world Hello world Hello world", "world"));


//                                      No_20

// function isReplace(S1, S2, S3) {
//   return S1.replace(S2, S3);
// }

// console.log(isReplace("Hello world", "world", "dunyo"));


//                                      No_21


// function replaceLastOccurrence(S1, S2, S3) {
//   let lastIndex = S1.lastIndexOf(S2);

//   if (lastIndex === -1) {
//     return S1;
//   }

//   return S1.slice(0, lastIndex) + S3 + S1.slice(lastIndex + S2.length);
// }

// console.log(replaceLastOccurrence("Hello world Hello world", "world", "dunyo"));


//                                      No_22


// function countSameStartEndWords(N) {
//   N = N.split(" ");
//   let count = 0;

//   for (let value of N) {
//     if (value.charAt(0) === value.charAt(value.length - 1)) {
//       count++;
//     }
//   }

//   return `${count} ta`
// }

// console.log(countSameStartEndWords('QOSHIQ OLMA ALANGA QIYSHIQ'));


//                                      No_23


// function isCountLetterA(N) {
//   let count = 0;
//   N = N.split(" ")

//   for (let word of N) {
//     let aCount = 0;
//     for (let char of word) {
//       if (char === "A") {
//         aCount++;
//       }
//     }
//     if (aCount === 2) {
//       count++;
//     }
//   }
//   return `${count} ta`
// }
// console.log(isCountLetterA('TANA TALIM  BALAND'));


//                                      No_24


// function getMaxOfString(str) {
//   str = str.split(" ")
//   let max = str[0]

//   for (let word of str) {
//     if (word.length > max.length) {
//       max = word;
//     }
//   }
//   return max
// }

// console.log(getMaxOfString('Qachon futbolga boramiz?'));


//                                      No_25


// const joinWithDot = str => str.replaceAll(" ", ".")

// console.log(joinWithDot("qachon futbolga boramiz"));


//                                      No_26


// function toCapitalize(str) {
//   return str
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// let text = "Qachon futbolga boramiz";
// console.log(toCapitalize(text));


//                                      No_27


// function countPunctuation(str) {
//   let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
//   let count = 0;

//   for (let char of str) {
//     if (marks.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// let text = "Qachon, futbolga. Boramiz?!!";
// console.log(countPunctuation(text));


//                                      No_28


// function getFileName(file) {
//   return file.split('/').pop().split('.')[0];
// }

// console.log(getFileName("D:/Qudrat_c++/books/My_book.exe"));


//                                      No_29


// function getExtension(extension) {
//   return extension.split('/').pop().split('.')[1];
// }

// console.log(getExtension("D:/Qudrat_c++/books/My_book.exe"));


//                                      No_30