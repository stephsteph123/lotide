const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const tail = function (start) {
  let array = [];
  for (let i = 1; i < start.length; i++) {
    array.push(start[i]);
  }
  return array;
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 0);
