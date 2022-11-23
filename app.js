let word =
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.";
function getStringLength(str) {
  return str.length;
}

let resultLength = getStringLength(word);
console.log(resultLength);


function findStringLength(str) {
  return str.substr().length;
}

let result = findStringLength(word);
console.log(result);
