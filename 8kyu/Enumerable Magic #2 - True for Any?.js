const any = (arr, fun) => {
    return arr.filter(el => fun(el)).length > 0 ? true : false
  }

// https://www.codewars.com/kata/enumerable-magic-number-2-true-for-any/train/javascript
// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.