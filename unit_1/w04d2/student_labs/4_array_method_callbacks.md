# Array Methods with Callbacks

A few array methods use callbacks. For example `.map` - `.map` takes each element of an array and does something to it and returns a new array.

But what should it do? Multiply everything by 5? Capitalize everything? If `.map` had a hard-coded thing it always did with an array, it wouldn't be very flexible.

By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

Four Arrays to work with

```js
const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const moreNums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram1 = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagram2 = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]
```

## every

1. Determine if every number in each `Nums` array is greater than or equal to 0
1. determine if every word in each `panagram` array is shorter than 8 characters

## filter

1. filter the `Nums` arrays for numbers less than 100
1. filter `panagram`s that have an even length

## find

1. find the first value in each `Nums` array divisible by 5
1. find the first word in each `panagram` array that is longer than 6 characters

## findIndex
1. find the index of the first number in each `Nums` array that is divisible by 3
1. find the index of the first word in each `panagram` array that is less than 2 characters long

## forEach
1. console.log each value of the `moreNums` array multiplied by 3
1. console.log each word in `panagram2` with an `e` at the end of it

**Thought Questions**
- What happened to the original array?
- Can you store the values from a `forEach` method in a new array?

## map
1. make a new array of each number in each `Nums` array multiplied by 100
1. make a new array of all the words in each `panagram` array in all uppercase

**Thought Questions**
- What happened to the original array?
- Can you store the values from a `map` method in a new array?

## reduce
- add all the numbers in each `Nums` array together using the `reduce` method
- concatenate all the words in each `panagram` array using `reduce`

**Thought Questions**
- What happened to the original array?

## some
- find out if some numbers in each `Nums` array are divisible by 7
- find out if some words in each `panagram` array have the letter `a` in them

## sort
- Try to sort each array without any arguments, do you get what you'd expect with the numbers array?
- Sort each `Nums` array in ascending order
- Sort each `Nums` array in descending order
- Sort each `panagram` array in ascending order
- Sort each `panagram` array in descending order

**Thought Questions**
- What happened to the original array?

## Hungry for More

- filter for words that have at least two vowels in them
- find each instance of the word zephyr - include case insensitive and plurals (Zephyr, zephyrs, and Zephyrs), and list the index positions

- filter for products with a price that is less than 20, using the array below:

```
const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]
    ```
