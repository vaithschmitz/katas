var orderedCount = function (text) {
    a = text.split('')
    object = {} 
     function stuff(object ,x) {
        if (Object.keys(object).includes(x)) {
        object[x] += 1
      }
      else {
        object[x] = 1
      }
    }
    a.forEach(function(val){
        stuff(object, val)
      })
    
    const res = Object.keys(object).map(function(key) {
      return [key, object[key]];
    })
    
    return res
    
  }

// https://www.codewars.com/kata/ordered-count-of-characters/train/javascript

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
