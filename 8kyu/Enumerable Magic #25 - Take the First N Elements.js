function take(arr, n) {
    x = []
    if (n > arr.length){
      return arr}
    else{
      for (i = 0; i< n; i++){
        x.push(arr[i])
      }
    }
    return x
  }


//   https://www.codewars.com/kata/enumerable-magic-number-25-take-the-first-n-elements/train/javascript  
//   Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.