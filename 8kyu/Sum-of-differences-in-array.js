function sumOfDifferences(arr) {
    const x = arr.sort(function(a, b){return a - b}).reverse()
    let bucket = []
    for (i = 0; i < x.length -1; i++){
      bucket.push(x[i] - x[i+1])
    }
    return arr.length < 2 ? 0 : bucket.reduce((a,b) => a+b)
    
  }

//   https://www.codewars.com/kata/sum-of-differences-in-array/train/javascript

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([1, 2, 10] Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0.