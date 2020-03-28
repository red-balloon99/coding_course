

# Combining data types

---
Title: Combining data types round two<br>
Type: Lab <br>
Duration: 1+ hrs <br>
Creator: Matt Huntington<br>
Adapted by: Thom Page<br>

---

## Afternoon Lab

Make a file `combining_datatypes_lab.js` in your `student_labs` folder.

# Part one

Given the following object, log the third element from the array

```javascript
const fun = {
    asdf: ["afd", "matt", 'sweet']
}
```

Given the following object, log the `elbow` property

```javascript
const body = {
    arm: {
        elbow: 'pointy'
    }
};
```

Create a data structure such that the following code logs the value "blue"

```javascript
console.log(myList[0].eyeColor);
```

Create a data structure such that the following code logs the value "buy supplies"

```javascript
console.log(myArrays[2][4]);
```

Call the function in the given code below:

```javascript
const awesome = [
    {
        asdf:'true'
    },
    3456.245,
    () => {
        console.log('fun');
    },
    "buddy"
];
```

Loop over the following array and print its values:

```javascript
const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}
```

Use two loops to loop over each array in the given "container" array

```javascript
const container = [
    [1,5,7],
    ['bear', 'dog', 'cat'],
    [true, false, true]
];
```

# Part two

Create a data structure such that the following logs `4`

```javascript
console.log(createCar().tires);
```

Create a data structure such that the following logs `pears`

```javascript
console.log(generateShoppingList()[3]);
```

Create a data structure such that the following logs `20lbs`

```javascript
console.log(createRobot().stats.weight);
```

Create a data structure such that the following executes without errors:

```javascript
createFunction()();
```

### More nested combinations

Access the `foo` property:

```javascript
const asdfasdf = [
    true,
    false,
    () => {
        return {
            foo: 'some value'
        }
    },
    'apple'
];
```

Create a data structure such that the following code logs "dog"

```javascript
console.log(matt[1]().someArray[0]);
```

Create a data structure such that the following code logs "blue"

```javascript
console.log(foods[1]().anObject.color);
```
