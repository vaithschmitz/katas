const  isDivideBy = (n, a, b) => {
  return n % a == 0 && n % b == 0 ? true : false
}

// https://www.codewars.com/kata/can-we-divide-it/train/javascript
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.