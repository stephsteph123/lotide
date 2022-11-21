
const findKey = function (array, itemsToCount) {
  //const results = {};

const result = Object.values(array);
if (result === itemsToCount()) {
  return Object.keys(array)
}
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"