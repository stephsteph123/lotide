const map = function(array,callback) {
  console.log()
  const results = [];
  for (let item of array) {
    console.log(item)
    results.push(callback(item));
  }
  console.log(results)
  return results;
};

module.exports = map;