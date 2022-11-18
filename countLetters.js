countLetters = function (str) {
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

countLetters("LHL")
countLetters("This is a thing that should count all of the things.")

//count each of each
//step 1: go through each element
//step 2: count all
//step 3: if the letter exist add to the count