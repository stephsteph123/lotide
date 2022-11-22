//It will take in two parameters as well:

//The array to work with
//The callback (which Lodash calls "predicate")

// "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
//To keep things simple, the callback should only be provided one value: The item in the array.

const takeUntil = function(array, callback) {
  for (let item = 0; item < array.length; item++) {
    let arr = array[item];
    if(arr === callback) {
    }
    console.log(arr);
  }
};

module.exports = takeUntil;
