const tail = function (start) {
  let array = [];
  count = start.length-1
  for (let i = count; i < start.length; i++) {
    array.push(start[i]);
  }
  return array;
};
module.exports = tail;