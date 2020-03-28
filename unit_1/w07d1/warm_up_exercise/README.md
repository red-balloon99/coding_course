<!--Morning warm-up:

1) Let's list out some technologies we've learned in this class thus far.
2) Go through weekly goals from last unit
3) Pull up progress slides (listing out what we've accomplished)
4) Go through this week's goals
5) Go through Full-stack diagram
6) Highlight the part we're covering now

-->

<!--WDI5 9:16 -->
<!--WDI4 9:25 -->
<!--WDI6 9:24 after coming back from break -->
<!--Actually 9:45 -->
<!--9:35 5 minutes -->

<!--Hook: Today we will take our first dip into the back end.  Raise your hand if you can summarize our waiter/waitress analogy of APIs from week 1.  Today we will talk about that interface--how do we, on the front end, interact with the back end? -->

# API and JSON Intro

## Learning Objectives
- **Explain** the difference between synchronous and asynchronous program execution
- **Explain** why synchronous program execution is not conducive to the front-end.
- **Perform** requests to an API to access and modify data.

## Opening Framing

We've learned a tremendous amount of stuff in Unit 1. In the first few weeks we learned how to create `for` loops, functions, nested arrays and objects, classes, and how to manipulate a web page through the DOM, in addition to learning how to use essential developer tools. In a couple weeks, we're going to turn toward the back end.

We will talk more later about the difference between synchronous and asynchronous program execution. For now, let's describe them briefly:

- **Synchronous/Blocking**: each line of code finishes before moving on to the next line of code

- **Asynchronous/Non-Blocking**: each line of code does NOT finish before moving on to the next line of code

More importantly, what kind of things can we do with non-blocking asynchronous program execution?

<!--Actually 9:50 WDI3-->

<!--9:40 10 minutes -->

### Think Then Type
Let's look at Google Maps. How would this site work with things not happening asynchronously?

In Slack, please type out an answer to the following question:

- Why might synchronous programming not be effective for the front end? Consider how HTTP requests and page loads work within your webpage.

<!--WDI6 9:30 turning over to devs -->
<!--WDI4 9:29 after turning over to devs -->

<details>
<summary>How does JS do this?</summary>
We don't want to sit around and wait for code to execute before we load the rest of our script. It would be really nice if we could just describe what we want to happen when the code finally does execute, in a callback.
</details>

### What is an API?

> Basically, an API is a service that provides raw data for public use.

API stands for "Application Program Interface" and technically applies to all of software design. The DOM is actually an example of an API, too! Since the explosion of information technology, however, the term now commonly refers to web URLs that can be accessed for raw data.

As we move into building single-page applications, now is the perfect time to start understanding how to obtain data on the client side and then render it on the browser.

### What is Serialized Data?

All data sent via HTTP are strings. Unfortunately, what we really want to pass between web applications is **structured data** (i.e. arrays and objects). To solve this problem, native data structures can be **serialized** into a string representation of the data. This string can be transmitted and then parsed back into the desired form by another web agent.  

There are **two** major serialized data formats...  

#### JSON

**JSON** stands for "JavaScript Object Notation" and has become a universal standard for serializing native data structures for transmission. It is light-weight, easy to read and quick to parse.

```json
{
  "users": [
    {"name": "Bob", "id": 23},
    {"name": "Tim", "id": 72}
  ]
}
```
> Remember, JSON is a serialized format. While it may look like an object, it needs to be parsed so we can interact with it as a true Javascript object.

#### XML

**XML** stands for "eXtensible Markup Language" and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly and cumbersome to parse. It remains a major format, however, due to its legacy usage across the web. You'll probably always favor using a JSON API, if available.

```
<users>
  <user id="23">
    <name><![CDATA[Bob]]></name>
  </user>
  <user id="72">
    <name><![CDATA[Tim]]></name>
  </user>
</users>
```

<!--10:03 -->

<!--9:50 5 minutes -->
<!--9:44 WDI4 -->
<!--WDI6 9:43 -->

## Where Do We Find APIs?

APIs are published everywhere, and we've given you 12 in the project description that should work well from the front end.

If you find a different API, please make sure you can "hello world" with it (i.e. you can get info, on a webpage that you've built, from the API--"Invalid Key" or similar does not count).

<!--WDI5 9:36 -->
<!--10:05 -->
<!--9:46 WDI4 -->
<!--9:55 15 minutes -->

## What Is An API Key?

While the majority of APIs are free to use, many of them require an API "key" that identifies the developer requesting data access. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

**Try hitting the [Giphy](https://api.giphy.com/) API...**

* No key: [http://api.giphy.com/v1/gifs/search?q=funny+cat](http://api.giphy.com/v1/gifs/search?q=funny+cat)

* With key: [http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC)

<!--WDI4 9:56 -->

<!--10:19-->
<!--WDI4 10:11 -->
<!--WDI6 10:05 -->
<!--10:10 15 minutes -->

## REST
REST is based around the concept of a Resource. A resource is just an object and a standardized set of URL routes for accessing information around those objects. Here are the RESTful routes:

Name	| Format				| Meaning |
--------|---------------------------------------|---------|
**Index**	| **GET resource/**			| Return multiple, often all instances of the resource |
**Show**	| **GET resource/:id**		| Return a single resource with :id |
Create	| POST resource/		| Create a resource |
Update	| PUT resource/:id		| Update resource with :id |
Delete	| DELETE resource/:id	| Delete resource with :id |

A RESTful API uses HTTP requests to GET, PUT, POST and DELETE data. A RESTful API may not use **all** of the routes, but if a functionality is present then it is accessed with the RESTful route.

<!--Need to go really slow through this and wait for everyone to make a successful request before moving on -->

## Postman
One tool that you can use to test APIs is Postman. Postman gives you a GUI access to the power of ``curl``. For your project, you will only need to use `GET` requests but it also provides a nice interface for `POST` and `PUT` requests.

### Installation
You can download a native Mac version of [here](https://www.getpostman.com/app/postman-osx?utm_source=site&utm_medium=homepage&utm_campaign=macapp).

<!--10:22 WDI4 -->

### Using Postman
There are two main sections that you need to update in Postman: the headers section, and body section.

The header represents the additional information that your request is sending. The main header we will need is ``Content-Type``. This tells the server what type of data we're sending. The main value we'll use in this class is ``application/json``.

The body is the actual data your sending. I recommend using the raw option so that you completely understand what you're sending. In the raw section you can type in your JSON directly. You can also use the form option if your JSON doesn't include objects or arrays.

### Books Resource
Our basic resource for this lab is the book object.

```javascript
  {
            "_id": "5a380025eeb8890014317349",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "image": "https://cloud.githubusercontent.com/assets/7833470/10892120/866ce1c6-8156-11e5-9bfd-ef729d98a408.jpg",
            "releaseDate": "April 10, 1925",
            "__v": 0
  }
```

<!--10:34, 10:43 after modeling -->
<!--WDI5 10:26 turning over to devs (had to fix a couple things) -->
<!--10:25 30-35 minutes -->

<!-- Model every single one of these then turn over to them to test -->
<!--WDI6 10:30, students brought down the server by posting invalid data, took a break -->

## Requirements
The goal for the lab is to run the HTTP requests listed above on the Books resource.

Navigate to https://den-super-crud.herokuapp.com.  You should see something like `Welcome to Super CRUD`.  That's because this the API's homepage.  Add `/books` to the end of the address, and you should see some books.

Open Postman, and execute the following requests on https://den-super-crud.herokuapp.com/books:

1. `Index` to show *all* the books.
2. `Show` to show *one* book.

## Hungry for More

1. `Create` to add a new book.
2. `Update` to update the book you just added with a new property value.
3. `Delete` to delete the book you just added.

**DO NOT DELETE SOMEONE ELSE'S BOOK**, that's just mean.

If you are not sure what URL to use on the `/books` API endpoint check the table with all these routes earlier in this lesson.

<!--Actually 11:07 -->
<!--11:17 WDI4 but wanted to go through a lot slower and make sure everybody grasped all the concepts this time-->
<!--WDI5 Ending 10:47 -->
<!--WDI6 Ended 11:15 -->

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
