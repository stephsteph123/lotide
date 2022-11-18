countPosition = function (str) {
  lowercaseStr = str.toLowerCase ();
  const result = {};
  for (letter of lowercaseStr) {
    if (!result[letter]) {
      result[letter] = str.indexOf(letter)
    } else {
      result[letter] = str.indexOf(letter)
  }
}
console.log(result)
}

countPosition("hello")

//cant get the second "l"