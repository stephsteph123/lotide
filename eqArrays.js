function eqArrays(first,second) {
  if (first.length !== second.length) {
    console.log(false)
    return;
  }
  for (let i = 0;i < first.length; i++) {
    if (first[i] !== second[i]) {
      console.log(false)
      return;
    }
  }
  console.log(true)
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

module.exports = eqArrays;
