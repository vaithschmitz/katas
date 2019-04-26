function getCount(str) {
    const v = ['a', 'e', 'i', 'o', 'u']
    return [...str].filter(l => v.includes(l)).length
  }

// https://www.codewars.com/kata/vowel-count/train/javascript
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.