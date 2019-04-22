// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  var rangeArr = [];
  if (arr[0] > arr[1]) {
    for (let i = arr[1]; i <= arr[0]; i++) {
      rangeArr.push(i);
    }
  } else {
    for (let i = arr[0]; i <= arr[1]; i++) {
      rangeArr.push(i);
    }
  }
  
  return arr;
}

smallestCommons([1, 5]);
