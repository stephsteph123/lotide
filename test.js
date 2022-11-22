const mode = function(arr) {
  counter = {};
  for (element of arr) {
    if (!counter[element]) {
      counter[element] = 1;
    } else {
      counter[element]++
    }
  }

mode([6 ,2 , 3, 4, 9, 6, 1, 0, 5]);
