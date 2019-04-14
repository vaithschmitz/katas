function longest(s1, s2) {
    let fin = []
    s1.split('').concat(s2.split('')).forEach(x => !fin.includes(x) ? fin.push(x) : x)
    return fin.sort().join('')

  }


// https://www.codewars.com/kata/two-to-one/train/javascript

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.