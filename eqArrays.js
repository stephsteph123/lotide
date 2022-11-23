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

module.exports = eqArrays;