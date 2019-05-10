function fakeBin(x){
    return [...x].map(el=> el < 5 ? 0 : 1).join('')
  
  }
  

// https://www.codewars.com/kata/fake-binary/train/javascript

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.