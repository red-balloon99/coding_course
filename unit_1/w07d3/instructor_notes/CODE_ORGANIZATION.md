# CODE ORGANIZATION TIPS

## Folder structure

Put different types of files into their own folders.

* `.js` files go in a `js` folder
* `.css` files go in a `css` folder
* images go in an `images` folder
* `index.html` never goes into a folder: it must remain top-level so that when you host your app, the hosting service knows where to look to load the page.

![](https://i.imgur.com/bIJAU5W.png)

By putting different types of files into their respective folders, they are organized into their own cubby holes. If you add more `.js` files, or many images, for example, you easily will know where to find them without tripping over other files.

Remember to specify the correct **path** when linking your files:

![](https://i.imgur.com/bchaQmp.png)

The paths include the folder name in which the files are located.


## OOP Code Organization

In a large project, your code can start sprawling all over the place. You can easily lose track of where important code is located. This is especially true when dealing with a lot of distributed event handlers and methods that update the DOM.

Keep the same types of processes in their respective sections. You can do this by separating your application code into top-level objects.

Example:

* **event handlers** can go in an **EventHandlers** object.
* **user interface** methods that update the DOM can go in a **UI** object.
* **application logic** can go in an **App** object.

These are just examples -- you can organize however you see fit and in a way that makes sense for your app.

### Event Handlers

You could put all of your event handlers into an object:

```javascript
const EventHandlers = {
	onClickDoSomething: () => {},
	onClickDoThis: () => {}
}
```

You could look in your `EventHandlers` object and pick the right one for the right listener:

```JavaScript
$('button').on('click', EventHandlers.onClickDoThis)
```
### JS File Separation

If OOP organization is a bit too overwhelming right now - try to divide your code into files.

You can still split up your code into UX/UI vs other logic

### User Interface

You could put functions that update the DOM into an object:

```javascript
const UI = {
	addTextToDiv: () => {},
	changeImgSize: () => {}
}
```

### Application Logic

You can put your application logic -- data, processes, operations that do not affect the DOM, into an object:

```javascript
const App = {
	gameOver: false,
	generateRandomNumber: () => {},
	shuffleArray: () => {}
}
```

**Depending on your app**, there are many possibilities for how you can change this organization to suit your needs:

### Event Listeners

Put your initial **event listeners** into the `document ready`, and have them trigger the respective **event handlers** which are located inside an object:

```javascript
$( () => {
  $('.element').on('click', EventHandlers.onClickDoSomething);
}); // end document ready
```

### Comment your code!

![comment your code](https://i.imgur.com/mEldaOo.png)

Create headers to section off your code, including a brief summary of what the section does.

JavaScript

```javascript
//=====================
// startGame()
// Runs upon click of 'Start Game' button.  
// Creates the board and begins the timer for ...
//=====================

const startGame = () => {
...
}
```

If your files are getting a bit long, group parts together and keep the same consistent headers

CSS:

```css
/*****************************
* FORMS
*****************************/
```

Comment out console logs that you used in testing that may be necessary to revisit again with further development.  Make console logs informative as to why it's appearing!

```javascript
const evaluateWinner = () => {
  // console.log("evaluateWinner function has been called.");
  ...
}
```

## Github

### GitHub is YOUR GitHub

This is Cathleen's commit history on GitHub:

![cathleen github 1](https://i.imgur.com/gvHIqTp.png)<br>
![cathleen github 2](https://i.imgur.com/sInSFQq.png)

This commit history belongs to "James":

![james github](https://i.imgur.com/7dFyVPU.png)

This commit history belongs to "Andrew":

![andrew github](https://i.imgur.com/P2XOJPU.png)

Be proud of your commit messages, and make sure you are listed as the contributor. As these scenarios can be created for various reasons (using someone else's computer for example), there is no one fix. However, think about what a future employer will see. If this applies to your GitHub, research and find a solution.  Your work should be attributed to _you_.  

### git commit -m "asdf"

Commit messages are not a burden - they are integral part of any software project, let it be a single developer writing a tool, or a big team of people collaborating on a project.  When you leave a project to rest for a few weeks or months, commits you’ve done with proper messaging and tagging become extremely important. Not only is it easier to see what has been done, but each commit has a small story behind those changes.

### Commit early, commit often.  

Every time you have a piece of working code, commit!  When something goes wrong, you'll have working code to revert back to.  Or you can hit `cmd Z` over and over and hope for the best.  

### Uninformative messages are those that do not convey any information when you read them.

For example:

- `add cli new`
- `fixes`
- `fix code review comments`
- `no message`
- `description`
- `wip`
- `hackz`

Stay concise and to the point. A long commit message is usually a bad sign for too much stuff done in a single commit. A good commit message is usually one or two sentences.

### Leave insights, skip profanity

Feel free to swear in the traffic jam, but keep your code clean. You never know who will encounter it (including future prospective employers).  

[Commit Logs From Last Night](http://www.commitlogsfromlastnight.com/)

### Don't forget the README!

- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [A curated list of awesome READMEs](https://github.com/matiassingers/awesome-readme)
- [A template to make good README (view the code 'raw')](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

## Resources

[Perl Best Practices - Standards and Styles for Developing Maintainable Code](http://shop.oreilly.com/product/9780596001735.do)
