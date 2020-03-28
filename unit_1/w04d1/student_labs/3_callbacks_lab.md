
# Callbacks

---
Title: Callbacks<br>
Type: Lab <br>
Duration: 45 mins <br>
Creator: Matt Huntington<br>
Adapted by: Thom Page<br>

---

## Practice Lab

Follow the following steps:

1. Create a function that takes a parameter and logs it
1. Create a second function that logs 'hi'
1. Invoke the first function, passing in the second function as a parameter
1. You should see a function reference being logged
1. Alter the first function so that it invokes (calls) its parameter
1. If you did these steps correctly, you should get a log of 'hi'

See if you can guess what this will log:

```javascript
const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi');
```

Run the code and see what happens.

See if you can guess what this will log:

```javascript
const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

foo(bar, 'hi');
```

Run the code and see what happens.

Add this function

```js
const baz = (param) => {
    console.log(param.toUpperCase());
}
```

and now predict what you'll get when you run this:

```js
foo(baz, 'hello')
```

# Electric Mixer

![electric mixer](https://i.pinimg.com/originals/14/b5/75/14b575bb9e064631727c7c1b8a30f06f.jpg)

A callback is often like an electric mixer attachment. A mixer attachment _does_ something. Each attachment does something different: slice, dice, spiralize, all sorts of fancy things depending on the attachment.

The electric mixer also _does_ something: it uses the mixer attachment.

1. Write a function `electricMixer` that takes one parameter named `attachment`. The `electricMixer` function should console log "This mixer is now: " plus the return value of the attachment.


2. Invoke `electricMixer` using an **anonymous function** as the argument. The return of the anonymous function should be a string that says: "spiralizing".

<!--
```javascript
const electricMixer = (attachment) => {
  console.log("This mixer is now: " + attachment());
}
```

```javascript
electricMixer(() => {
  return "spiralizing";
});
```
-->

The callback function doesn't need to be anonymous, we can give it a name and pass it as a reference:

```javascript
const spiralizer = () => {
  return "spiralizing";
}

electricMixer(spiralizer);
```

3. With that in mind, create a function called `slicerDicer` that returns what a slicer and dicer would do

<!--
```javascript
const slicerDicer = () => {
  return "slicin' and dicin'";
}

electricMixer(spiralizer);
electricMixer(slicerDicer);
```
-->

4. Finally, write two more new attachment functions for the mixer. Get your electric mixer to use the attachments.

## setInterval and setTimeout

We can still provide multiple arguments to a function even if one of those arguments is a function.

This is the structure for **setInterval** and **setTimeout**:

```javascript
functionName(CALLBACK, MILLISECONDS)
```

And here are full examples:

```javascript
setTimeout(() => {
  console.log('hi');
}, 2000);
```

```javascript
setInterval(() => {
  console.log('hi');
}, 2000);
```

1. Use SetInterval to display a number that increases by 1 each second (it's a clock!)

2. Give a real world example of when you would use `setTimeout` or `setInterval`

<hr>

Follow the following steps:

 1.  Create a function called `wordReverse` that reverses a string.
 2.  Create a function called `toUpperCase` that capitalizes every letter in a string.  Hint: it may be helpful to integrate the function you made during the warm-up activity.
 3.  Write a function, called `repMaster`, that accepts two arguments: `input` and a `callback`. `Input` should be an argument for the `callback`.  The `callback` used as an argument must return a string.  `repMaster` should take the result of the returned string, and return that result with `' proves that I am the rep MASTER!'` concatenated to it.  

Expected Output:  

 ```javascript
      repMaster("Never give your heart to a blockhead", wordReverse);
 ```
>    "blockhead a to heart your give never proves that I am the rep MASTER!"

  ```javascript
      repMaster("I finished this practice", toUpperCase);
  ```

>  "I FINISHED THIS PRACTICE proves that I am the rep MASTER!"

## Hungry for More

Javascript is a great language but it can always be improved!

1. We need a `.count` method and we need you to write it! The method should take an array and count how many elements are the same in that array, returning that number. *hint: remember to make an array that has duplicate elements!!*
1. Write a `.unique` method that creates a new array out of all the unique values in an array.
