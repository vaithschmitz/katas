function mostAppear(arr){
    let count = {}
    arr.forEach( x=> Object.keys(count).includes(x.toString()) ? (count[x] ++) : count[x] = 1)
    return parseInt(Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b))
  }

//   https://www.codewars.com/kata/find-number-in-an-array-number-4/train/javascript

// Give an array arr that contains some integers, one of the integers appears times is more than the half of the total numbers of element(arr always has such a integer). Your task is to find it. For example:

//  arr = [0,1,3,3,3,3,3,1,0], should return 3
// Of course, these integers are not always continuous ;-)

//  arr = [1,2,1,3,1,4,1,5,1], should return 1
// Other numbers can be repeated too:

//  arr = [1,1,1,3,3,3,1,1,1,5,5,5,1,1], should return 1