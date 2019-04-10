var countSheep = function (num){
    arr = [];
    for (i = 1; i <= num; i++) {
       arr.push(`${i} sheep...`)
      }
      return arr.join('')
  }

  
//   https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
