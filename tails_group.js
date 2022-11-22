const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 0);

const tail = function(x) {
  let array = [];
  for (let i = 1; i < x.length; i++) {
    array.push(x[i]);
  }
  return array;
};

console.log(tail([3, 4, 5]));