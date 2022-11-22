const countLetters = function (str) {
  lowercaseStr = str.toLowerCase ();
  const result = {};
  for (letter of lowercaseStr) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++
  }
}
console.log(result)
return result;
}

module.exports = countLetters;
