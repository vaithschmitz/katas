function sumMix(x){
    y = x.map((x) => {return (typeof x) == 'string' ? parseInt(x) : x})
    const r = (acc, red) => acc + red
    return y.reduce(r)   
  }


//   https://www.codewars.com/kata/sum-mixed-array/train/javascript

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.