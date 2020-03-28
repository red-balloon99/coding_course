This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!--SEI1 4:34 -->

## React Router

When we create a **single page** application, we are always `GET`ting the same route from the backend (usually `/`). So if we want to redirect someone to the `'/contact'` page of our site, we can't (that would make our app multi-page). It will always default to the primary view.

The way we have been managing different views is with ternary operators, but that can get really complex very quickly.

Luckily for us, we have React Router to help us out with this problem:

[React Router Docs](https://reacttraining.com/react-router/web/guides/quick-start)

Basically, React Router allows us to "intercept" a route that would normally go to the back end, and do two things:

1. Do DOM manipulation to show a new view
2. Keep track of our view history, so our users can go back, refresh, and utilize URL params as usual

We'll just go over making a few different views. But you can use React Router for redirects, auth, custom links, 404s, and more.

One member of your group will see some of these advanced features in the next lesson.

<details><summary>screenshot</summary>

![screenshot all the views one page](localhost_3000_locations.png)

</details>

<!--SEI1 4:43 turning over to students -->

## Set Up

- Navigate to the `react-waters` directory in `student_examples`
- `npm install`
- `npm install react-router-dom`
- `npm start`

<!--SEI1 5:00-->

## Our First Route

**App.js**

```js
import { BrowserRouter as Router, Route } from "react-router-dom"
```

Wrap the existing code in `<Router>`

```js
return (
  <Router>
    <div className="container">
      <Navigation />
      <About />
      <Contact />
      <Location />
      <Menu />
    </div>
  </Router>
)
```

Rewrite components to make them Route components

```js
<Route path="/" exact component={Menu} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/locations" component={Location} />
```

Replace Navigation component with Router Links:

**Navigation.js**

```js
import { Link } from "react-router-dom"
\\ ...
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/locations">Locations</Link>
  </nav>
```

## Further Resources

- [Intro to React Router](https://alligator.io/react/react-router/)
- [Passing Params to React Router](https://alligator.io/react/react-router-parameters/)
