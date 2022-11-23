const eqObjects = function(object1, object2) {
  one = Object.keys(object1).length
  two = Object.keys(object2).length
  if (one !== two) {
    return false;
  }
  Object.keys(object1).forEach(Element => {
    if (!Element in object2) {
      return false;
    } 
    if (!object1[Element] === object2[Element]) {
      return false;
    }
  });
  return true;
};

module.exports = eqObjects;
