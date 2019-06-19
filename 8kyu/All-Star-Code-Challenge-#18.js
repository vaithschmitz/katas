function strCount(str, letter){  
    let x = 0
    str.split('').forEach(el => el == letter ? x += 1 : '')
    return x
  }

// https://www.codewars.com/kata/all-star-code-challenge-number-18/train/javascript

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.