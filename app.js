let word =
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.";
function getStringLength(str) {
  return str.length;
}

let resultLength = getStringLength(word);
console.log(resultLength);

// function findStringLength(str) {
//   counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.length !== " ") {
//       counter++;
//     }
//   }
//   return counter;
// }

// let result = findStringLength(word);
// console.log(result);

function findStringLength(str) {
  let spaceRemove = str.split(" ").length - 1;
  return str.length - spaceRemove;
}

let result = findStringLength(word);
console.log(result);
