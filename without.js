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
  }

//step 1: review the second array element
//step 2: find second array element within first array
//step 3: create new array (dont change the first array)
//step 4: new array should not have the second array value

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

