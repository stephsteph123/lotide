const eqObjects = function(object1, object2) {
  result = [];
  result2 = [];
  one = Object.keys(object1).length
  two = Object.keys(object2).length
  if (one !== two) {
    return false;
  } else {
  Object.keys(object1).forEach(key => {
    result = key + object1[key]++
    console.log(result)
  });
    Object.keys(object2).forEach(key => {
    result2 = key + object2[key]++
    console.log(result2)
  });
};
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, ba); // => true
//eqObjects(ab, abc); // => false

module.exports = eqObjects;