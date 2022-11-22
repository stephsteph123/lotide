function without(first,second) {
  newArray = [];
  for(element of first){
      if (second.includes(element)) {
      }
      else {
        newArray.push(element)
      }
    }
    console.log(newArray)
  };

  module.exports = without;

