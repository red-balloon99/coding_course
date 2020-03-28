const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826, 209, 419, 309, 48, 738, 709, 728, 607, 9, 863, 976, 588, 611, 164, 383, 261, 14, 525, 479, 169, 755, 574, 330,
  736, 541, 838, 577, 957, 179, 436, 333, 206, 295, 744, 926, 799, 691, 259, 401, 104, 630, 645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13, 13, 17, 5, 5, 18, 12, 5, 18, 11, 2, 2, 9, 8, 4, 5, 18, 15, 18, 0, 6, 11, 18, 14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = ['The', 'job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner', 'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept', 'driving', 'their', 'oxen', 'forward']

// console.log(smallNums)
// console.log(nums)
//
// console.log(panagram)
// console.log(panagrams)

// Every
// Determine if every number is greater than or equal to 0
// console.log(smallNums.every(num => num >= 0))
// console.log(nums.every(num => num >= 0))

// determine if every word shorter than 8 characters
// console.log(panagram.every(word => word.length < 8))
// console.log(panagrams.every(word => word.length < 8))

// Filter
// filter the array for numbers less than 100
// console.log(smallNums.filter(num => num < 100))
// console.log(nums.filter(num => num < 100))

// filter words that have an even length
// console.log(panagram.filter(word => word.length % 2 === 0))
// console.log(panagrams.filter(word => word.length % 2 === 0))

// Find
// Find the first value divisible by 5
// console.log(smallNums.find(num => num % 5 === 0))
// console.log(nums.find(num => num % 5 === 0))

// find the first word that is longer than 6 characters
// console.log(panagram.find(word => word.length > 6)) // gives undefined when it can't find it
// console.log(panagrams.find(word => word.length > 6))

// Find Index
// find the index of the first number that is divisible by 3
// find the index of the first word that is less than 2 charaters long

// console.log(smallNums.findIndex(num => num % 3 === 0)) // 2 index position
// console.log(nums.findIndex(num => num % 3 === 0)) // 2 index position

// For Each
// console.log each value of the nums array multiplied by 3
// console.log(smallNums.forEach(num => console.log(num * 3)))
// console.log(nums.forEach(num => console.log(num * 3)))
// // console.log each word with an exclamation point at the end of it
// console.log(panagram.forEach(word => console.log(word + '!')))
// console.log(panagrams.forEach(word => console.log(word + '!')))

// Map
// make a new array of each number multiplied by 100
// const bigNums = smallNums.map(num => num * 100)
// console.log(bigNums)
// const manyBigNums = nums.map(num => num * 100)
// console.log(manyBigNums)

// Some
// Find out if some numbers are divisible by 7
// console.log(smallNums.some(nums => nums % 7 === 0))
// console.log(nums.some(nums => nums % 7 === 0))
// Find out if some words have the letter a in them
// console.log(panagram.some(word => word.match('a')))
// console.log(panagrams.some(word => word.match('a')))
// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
// console.log(smallNums.sort())
// Sort the numbers in ascending order
// console.log(smallNums.sort((a, b) => a - b))
// Sort the numbers in descending order
// console.log(smallNums.sort((a, b) => b - a))
// Sort the words in ascending order
console.log(panagram.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return 1
  } else {
    return 0
  }
}))
// Sort the words in descending order
console.log(panagram.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return 1
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return -1
  } else {
    return 0
  }
}))

// is every letter there?
const isPanagram = (arr) => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const allLetters = arr.join('').split('')
  allLetters.forEach(letter => {
    for (let i = 0; i < letters.length; i++) {
      if (letter === letters[i]) {
        letters.splice(i, 1)
      }
    }
  })
  if (letters.length === 0) {
    return true
  } else {
    return false
  }
}
// console.log(isPanagram(panagram))
// console.log(isPanagram(['twenty', 'dollar', 'bill']))
