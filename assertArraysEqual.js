const eqArrays = require('../eqArrays');

function assertArraysEqual(first,second) {
  if (first.length !== second.length) {
    console.log("this is wrong")
  }
  for (let i = 0;i < first.length; i++) {
    if (first[i] !== second[i]) {
      console.log("this is wrong")
    }
  }
  console.log("this is right!")
}

module.exports = assertArraysEqual;