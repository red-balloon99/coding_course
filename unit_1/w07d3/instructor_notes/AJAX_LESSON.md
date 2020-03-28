# JavaScript AJAX/ 3rd Party APIs

<!--SEI1 10:11 -->

## Lesson Objectives
- Explain what a 3rd Party API is and its use
- Explain AJAX
- Explain and use promises
- Explain URL parameters
- Use jQuery's AJAX method to fetch data
- Use jQuery to render the data in the DOM

### Third Party APIs

Many web sites have their own data, but they can pull in other data. For example, many news sites have a weather widget. This widget gets its data from a weather resource.

There are many APIs that can be used by individuals and companies. Some are totally free, some are available for a small fee, and some are really expensive.

There are APIs for
- Weather
- Stocks
- Beer
- Dictionaries
- Books
- Sports
- Art
- Games
- Movies

[Here is one list of APIs](https://github.com/toddmotto/public-apis)

## API Keys

Many APIs are restricted. Maintaining data on a server can get expensive and the data on a lot of these sites is valuable.

One main way individuals/companies can get access to APIs is through API keys - a special set of characters that is acquired through the website. Every time you make a request, the key must be used, which lets the API keep track of how many requests you make and limit/charge you accordingly.

For today we'll get our own key from OMDB - it will be free, because we are using it for educational purposes.

The other way is OAuth. OAuth is a tangent to what we'll talk about today, but if you want to learn more, here is a [good start](https://stackoverflow.com/questions/4201431/what-exactly-is-oauth-open-authorization).  If you see an API that requires OAuth, keep it in mind for Project 2 and beyond.

Typically, API keys go in as query parameters. Query parameters go at the end of a URL. They start with a `?` and then have key-value pairs. Many key-value pairs can be used and each key-value pair can be used by separating them with an ampersand (`&`).

So how do we get data for our own sites?

#### Data over the Internet

the `http` transfer protocol, in essence, just sends strings to be parsed and interpreted. There are certain standards and patterns beyond what we will cover today.

When the Internet first kicked off, files were sent over whole. A newer technology evolved, which allowed only certain parts of a web page to be updated.

For example, many web sites have a google map embedded in their site. You can interact with the map (zoom in, move it around), and the map will update without causing the whole page to reload. Another example might be a stock ticker on a news website. This technology to only reload a portion of a webpage is often referred to as AJAX.

#### AJAX stands for Asynchronous JavaScript and XML

XML was once a popular way to store and send data over the internet and it is still used. However, JSON has become the predominant way to send data over the internet.

Even though JSON has become the preferred method of data transfer, no one seems in a hurry to start calling AJAX AJAJ.

#### JSON

JSON stands for **J**ava**S**cript **O**bject **N**otation. It is a lightweight way for storing and transporting data.

JSON is just a long string of characters. It is based off the JavaScript Object syntax. One notable difference is that double quotes must always be used for keys and values.

When we will use AJAX, we will be sending and receiving JSON.

AJAX allows us to reload portions of a web page.

#### AJAX & jQuery

jQuery was the first to make AJAX requests a breeze. To use AJAX, you just call the `$.ajax()` function

#### Mini Movie App

You are making a web page for Gerard Von Schtieffel's MüvieHaüs. This arthouse movie theater is going to play a wide range of movies. Rather than look up and enter all the data for every movie that will be played, we'll just look up the title and get the rest of the data from OMDB (Open Movie Data Base).

#### Getting Started

- `mkdir movie_app`
- `cd movie_app`
- `touch app.js index.html main.css`

Start with this HTML:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Gerard Von Schtieffel's MüvieHaüs</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" charset="utf-8"></script>
        <script src="app.js" charset="utf-8"></script>
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
      <div class="container">

      </div>
    </body>
</html>
````

We'll have our page get data from the external site http://www.omdbapi.com/.


Sign up for a free key: http://www.omdbapi.com/apikey.aspx

Choose Free, under `use` put school project or something similar

Check your email, and click the link to activate your API key.

<!--SEI1 10:40 -->

### Our Query URL

**app.js**

```js
const baseURL = `http://www.omdbapi.com/?`
const apiKey = `apikey=yourkeyhere`
const queryType = `t=`
let titleQuery = 'eraserhead'
let queryURL = baseURL + apiKey + '&' + queryType

console.log(queryURL + titleQuery)
```

Open up our index.html in our browser, we should have a clickable link in our dev tools console. When we click the link we should see our movie details


![](https://i.imgur.com/JEXjQ34.png)

<!--SEI1 10:56 -->

Great! Now we want to populate this data in our web page

Our AJAX function takes one argument, an object. We'll set one key value pair for our url of where to get our data

```js

const movieData = $.ajax({
  url: queryURL + titleQuery
})

console.log(movieData)

```

We can scroll down and in `responseJSON` we see our data let's console log it!

```js
console.log(movieData.responseJSON)
```

Uh oh! It's undefined!

<!--SEI1 10:59 -->

### JavaScript Promises

Remember JavaScript is Asynchronous, so our AJAX call isn't finished getting the all the data before our `console.log` fires.

One way we we've dealt with this problem is using callbacks. But that can get a bit unwieldily. jQuery's AJAX method actually returns a `promise`. A `promise` is a special JavaScript object that can wait for a response and `then` do something

```js

const getMovie = () => {
  $.ajax({
    url: queryURL + titleQuery
  }).then((movieData) => {
    console.log(movieData)
  }, (error) => {
    console.error(error)
  })
}

getMovie()
```

<!--SEI1 11:19 -->

### Add our Data to the DOM


```js
$(()=> {
  const getMovie = () => {
    $.ajax({
      url: queryURL + titleQuery
    }).then((movieData) => {
      $('.container').html(`
        <h2> ${movieData.Title} </h2>
        <h3> ${movieData.Year} </h3>
        <h4> ${movieData.Rated} <h4>
        <h5> ${movieData.Genre} <h5>
        <p> ${movieData.Plot} </p>
        `)
    }, (error) => {
      console.error(error)
    })
  }
  getMovie()
})


```

We can even add the image

```js
const getMovie = () => {
  $.ajax({
    url: queryURL + titleQuery
  }).then((movieData) => {
    $('.container').html(`
      <h2> ${movieData.Title} </h2>
      <h3> ${movieData.Year} </h3>
      <h4> ${movieData.Rated} <h4>
      <h5> ${movieData.Genre} <h5>
      <p>  ${movieData.Plot} </p>
      `)
      const $img = $('<img>').attr('src', movieData.Poster).attr('alt', movieData.Title)
      $('.container').append($img)
  }, (error) => {
    console.error(error)
  })
}

$(()=> {
  getMovie()
})

```

<!--SEI1 11:24 -->

### Make our Request Dynamic

**index.html**

Add a form

```html
 <form>
   <input type="text" />
   <input type="submit"/>
 </form>
```

**app.js**

```js
 $('form').on('submit', (event) => {
   event.preventDefault()
   titleQuery = $('input[type="text"]').val()
   getMovie()
 })
```

Whole Code:

```js
const baseURL = `http://www.omdbapi.com/?`
const apiKey = `apikey=53aa2cd6`
const queryType = `t=`
let titleQuery = 'eraserhead'
let queryURL = baseURL + apiKey + '&' + queryType

const getMovie = () => {
  $.ajax({
    url: queryURL + titleQuery
  }).then((movieData) => {
    $('.container').html(`
      <h2> ${movieData.Title} </h2>
      <h3> ${movieData.Year} </h3>
      <h4> ${movieData.Rated} <h4>
      <h5> ${movieData.Genre} <h5>
      <p>  ${movieData.Plot} </p>
      `)
      const $img = $('<img>').attr('src', movieData.Poster).attr('alt', movieData.Title)
      $('.container').append($img)
  }, (error) => {
    console.error(error)
  })
}

$(()=> {
  getMovie()

  $('form').on('submit', (event) => {
    event.preventDefault()
    console.log('clicky')
    titleQuery = $('input[type="text"]').val()
    getMovie()
  })
})
```

<!--SEI1 11:42 -->
