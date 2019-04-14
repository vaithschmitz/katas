function solution(str, ending){
    return [...str].slice(ending.length - 1).join("") == ending ? true : false
  }

//   https://www.codewars.com/kata/string-ends-with/train/javascript

//   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).