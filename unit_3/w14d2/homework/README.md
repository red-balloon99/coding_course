[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# React Groceries

Build an app that lets you make a list of groceries to buy.

#### Learning Objectives

- Practice setting up a React app
- Practice Mocking a React app
- Practice using `state`
- Practice rendering a list
- Practice conditional rendering

#### Prerequisites

- Introduction to React static components, mocking, state, rendering

---

## Getting Started

1. `mkdir react_groceries`
1. `cd react_groceries`
1. `touch index.html app.js`
1. `add all of the scripts for a react app`

## Deliverables

Build a grocery app that allows users to make a grocery list

## Technical Requirements

1. Read over these specs and draw a mockup of your app (don't worry about bonus features at this point)
1. Must have grocery items in this shape:
  ```js
  {
    item: '',
    brand '',
    units: '',
    quantity: 0,
    isPurchased: false
  }
  ```
1. Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
1. Make inputs so that new items can be added
1. Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for `isPurchased`)
1. Add some style to your app
1. **Stretch** Add a button that says 'purchase' and when clicked the value of `isPurchased` is toggled

## Submission Guidelines

- Must be submitted no later than before the start of next class

## Hungry for more
- Make multiple grocery lists (one for each family member) and have them update independently
- sort your list alphabetically
- create other ways to sort your data (e.g. by quantity)
- change the 'purchase' button's functionality to actually remove the item from the list
- add a 'later' button that toggles some css (gray text, strikeout etc.) if the item should be purchased later
- expand your app to allow for images (the images should be an http url) and then render the image in your app - some images may take longer to load and not appear correctly, look into react life cycle events and/or lazy loading if you have time

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
