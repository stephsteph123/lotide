
function middle (start){
  newArray = [];
  oddCount = Math.floor((start.length)/2)
  evenCount = Math.floor((start.length)/2-1)
  if (start.length <= 2) {
    newArray = [];
    console.log(newArray);
  }
  else if (start.length %2 !==0){
    newArray = (start[oddCount]);
    console.log([newArray]);
  }
  else {
    newArray = start[evenCount];
    newArray2 = start[oddCount];
    console.log([newArray,newArray2]);
  }
};

module.exports = middle;