# Heirloom Furniture Restoration

Heirloom Furniture Restoration would like to provide recommendations for their customers on the best way to restore their furniture.  They have asked you to help with this project.

## Set up

<!--SEI1 6:37 -->
<!--Do this as Team Independence and Team Fundamentals -->

- Use Create React App (and don't forget to remove the .git)
- Change `App.js` to be a `class` component
- Clear out all the JSX in `App`, and replace with a simple `h1`
- `npm start`

You should now see your `h1` element render in the DOM.

- **Optional** : Bored of plain html? Feel like you need some css practice? Set a timer for 10 minutes and fill out your `index.css` file. Include a google font, background color and font color. If you have some leftover time, try to style something else. Specifically, you'll be using a `ul` and `li`s as well as your `h1`, so you can add some other colors or fonts there.

## Inside the App class

```js
class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1 className='shop-name'>Heirloom Furniture Restoration</h1>
      </div>
    )
  }
}
```
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"First Component Created".
<hr>

## Add State to the App Component

```js
state = {
  chair: "Grandma's Favorite Chair"
}
```
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"State Added"
<hr>

## Create a Furniture Component and Pass Props

1. Create a `Furniture` class inside `src/components/Furniture.js`
1. Have the `render` function return a `ul` with one `li`
element inside of it. This `li` element should render `{this.props.chair}` as `Grandma's Favorite Chair`
1. Import `Furniture` into `App.js` and add it below the `h1`

![rendered html](https://i.imgur.com/ZiWWkw4.png)

Expected Appearance:

![](https://camo.githubusercontent.com/3ea69eb7b5c08bbbaf14cdeca4f993e1d28855f0/68747470733a2f2f692e696d6775722e636f6d2f4e356e743145412e706e67)

Before you move on, check the current `state` and components in your React dev tools.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Furniture Componenet and Props".
<hr>

<!--SEI1 ~7:20 -->

## Write a Function that is Called by a Click Event

1. Inside the App class, add a `restore` function
```js
restore = () => {
  console.log('clicked it and the value of this is:', this)
}
```
1. Add this function to an `onClick` event in the `li` in the Furniture component
1. Not working? Make sure you pass it from App to Furniture
1. Let's give that `restore` function some more functionality. This app is going to help people figure out how best to restore their heirloom pieces
1. Obviously, in 2018, the best way to restore furniture is to paint it white. Let's add the code to do that

```js
restore = () => {
  this.setState({
    chair: `Paint ${this.state.chair} white`
  })
}
```

When we click the `li` it should now update to read:

![white](https://i.imgur.com/sDBr6Bh.png)

1. It isn't obvious that we have to click the li element to get the recommendation. In the `Furniture` component, inside the `li`, add a button that says `Restoration Advice`, and move the click event to the button.

1. Nice, but we can click the button many times, which makes the advice come out a bit...weird.

![weird](https://i.imgur.com/Ica0RDg.png)

1. Fix this by only allowing the button to show up if `recommendationMade` is `false`
1. Update `state` to have a key `recommendationMade` with a property of `false` to start
1. Add a ternary operator to determine whether or not the button should be displayed in the Furniture component
1. Use the React dev tools to toggle this field between `true` and `false`
![react dev tools toggle true false](https://i.imgur.com/eFdOzK9.png)
1. Not working? Did you pass this property down from `App`?

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Function on Click"
<hr>

<!--SEI1 ~7:45 -->

## Add More Items To Restore

Expand state to:
```js
state = {
  furniture: [
    {
      piece: "Grandma's Favorite Chair",
      recommendationMade: false,
      id: 1
    },
    {
      piece: 'Grand Armoire',
      recommendationMade: false,
      id: 2
    },
    {
      piece: 'Fainting Couch',
      recommendationMade: false,
      id: 3
    },
    {
      piece: 'Fabergé Egg',
      recommendationMade: false,
      id: 4
    }
  ]
}
```

1. Make a new class component called `ListItem`, and put the file in `src/components`
1. Refactor your code in `Furniture` so that you are able to generate all the `ListItem`s based on the data. The `li` should just render the data for `piece` right now.
1. Don't forget to assign a `key` to the `map`ped elements. You can use the `id` property from the furniture object for this.

Once you are rendering the list without errors, we can bring back the functionality we had with with the restoration recommendation.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Rendering List Items"
<hr>

1. Put the recommendation button inside `ListItem`
1. Add `console.log(this)` to the `restore` function
1. Pass the `restore` function as a `prop` from `Furniture` to `ListItem`
1. Test to make sure we get `this` in the console in the browser
1. Make sure we are toggling the right `recommendationMade` and updating the right `piece` - this will be a multi-step process:
  1. Edit the `this.setState` line in `restore`
  1. We probably want to pass the value of the item. We can't pass it straight into `this.props.restore` because we would call the function immediately. But we can define an anonymous function and call our desired function with our arguments that way. [Handling Events in React](https://reactjs.org/docs/handling-events.html)
  1. Make sure you add a parameter to the `restore` function

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Restored Restore Function Functionality"
<hr>

## Add More Furniture Through a Form

1. Should we make a new component just for a single input form? Probably not, having one massive and complex component isn't the React way, but over-normalizing and making every html element a component isn't useful either.
1. In our `App` component let's set up a form - two inputs - one text, one submit - right below the `h1`.
1. Write two functions: one for handling the item input change and another for the item input submit.
1. Add a new property to `this.state` in the `App` component called `newItem` and set it to an empty string.
1. Add an `onChange` event listener to the text input that will call the corresponding input change function.
1. Add an `onSubmit` event listener to the form that will call the corresponding submit function. Remember to prevent the default behavior for submit. See if you can empty the input after submit as well.
1. On submit, be sure to create an object that matches our other data (don't forget `id` and `recommendationMade`). Then add it into our furniture array.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Able To Add More Items"
<hr>


# Hungry for More

## Delete an Item

It's hungry for more! Figure it out! You can do it!

<hr>
&#x1F534;

**Commit your work**

<br>
The commit message should read:

<br>
"I did it. HFM. YAY ME"

<hr>

## Practice CSS

Style your app some more.
