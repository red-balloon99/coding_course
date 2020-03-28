# Intro to React Props

<!--SEI1 1:03 -->

## Learning Objectives
- Learn about props
- Learn how to pass props
- Learn difference between props and state

## Props

Props is short for properties. We know that a component can have `state` (data for our view). If we think back to our React Store, we had just one component. It was a pretty small app, so one component was fine. But as we continue to build out functionality, our one component can get very complex and the code can expand to hundreds or thousands of lines. Maintaining such a large component would be really hard.

Similarly, our playlist code in Tunr is getting a little messy. We can make this better by splitting out a `Playlist` component into its own file.

## Add a New Component

- make sure you are on the same level as `package.json`
- `mkdir src/components`
- `touch src/components/PlayList.js`

**src/components/PlayList.js**

```js
import React from 'react';

class PlayList extends React.Component {
  render () {
    return (<h3> All the Songs</h3>)
  }
}

export default PlayList;
```

## Import and render it in our `App.js`

```js
import PlayList from './components/PlayList.js'
```

Cut our `div` with a className of playlists, and replace it with a `Playlist` component

```js
<PlayList />
```

Let's **MOVE** our song list to our new component

From **App.js**

```js
<div className="playlist">
  <h3>{this.state.playlists.title}</h3>
  <table>
    <thead>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
    {  this.state.playlists.songs.map((song, index )=> {
        return (
          <tr key={index}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.time}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
</div>
```

To **src/components/PlayList**

```js
class PlayList extends React.Component {
  render () {
    return (
      <div className="playlist">
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.playlists.songs.map((song, index) => {
                  <tr key={index}>
                    <td>{song.artist}</td>
                    <td>{song.title}</td>
                    <td>{song.time}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
```

Right now, we should be getting an error that says `TypeError: Cannot read property 'playlists' of null`. Why is that? Remember, we're referring to `this.state` but there is no state in this component. Instead, we should be getting that information from our parent component, which in this case is our `<App />`. When we are in a child component (`Playlist`) we access information from the parent using `this.props`. Because of this we would access our songs in our `<Playlist>` component using `this.props.playlists.songs`. Update your component so that it looks like the following:

```js
class PlayList extends React.Component {
  render () {
    return (
      <div className="playlist">
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.playlists.songs.map((song, index) =>
                <tr key={index}>
                  <td>{song.artist}</td>
                  <td>{song.title}</td>
                  <td>{song.time}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
```

Now we are getting a new error `TypeError: Cannot read property 'songs' of undefined`. This means that we are trying to access playlists in our props, but we don't have a playlists key in our `this.props` object. Why? Because we never passed it down from the parent!

Modify our `<Playlist />` in our `<App />` so that we pass down a value. It should look like this:

`App.js`:

```js
<div className="playlists">
  <PlayList playlists={this.state.playlists} />
</div>
```

Now we can access the data we're passing down in our `PlayList` component.

<!--So we can't add songs after this...we need to add the `handleChange` and `handleSubmit` functions, as well as `title`, `artist`, and `time` to `props` -->

## A Component that Has Props and State

First, let's make a new component

- `touch src/components/Song.js`

```js
import React from 'react';

class Song extends React.Component {
  render () {
    return
  }
}
export default Song;
```

Import this component into the `PlayList`

```
import Song from './Song.js'
```

Let's move our `tr`s into this component

```js
import React from 'react';

class Song extends React.Component {
  render () {
    return (
      <tr key={index}>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.time}</td>
      </tr>
    )
  }
}
export default Song;
```

Update our **PlayList.js**

```js
import React from 'react';
import Song from './Song.js'

class PlayList extends React.Component {
  render () {
    return (
      <ul>
      { this.props.playlists.songs.map((song, index) => {
        return (
          <Song song={song} key={index}/>
        )
      })}
      </ul>
    )
  }
}
export default PlayList;
```

Update our Song component

```js
import React from 'react';

class Song extends React.Component {
  render () {
    return (
      <tr key={this.props.index}>
        <td>{this.props.song.title}</td>
        <td>{this.props.song.artist}</td>
        <td>{this.props.song.time}</td>
      </tr>
    )
  }
}
export default Song;
```

 Let's say we want a user to be able to "like" a song by clicking on a song. If the song is liked, a heart will appear.

Add this to the `state` in `Song`:

 ```js
 class Song extends React.Component {
   state = {
     love: false
   }
   render () {
     return (
       <tr key={this.props.index}>
         <td>{this.props.song.title}</td>
         <td>{this.props.song.artist}</td>
         <td>{this.props.song.time}</td>
       </tr>
     )
   }
 }
 ```

Now we can conditionally render a heart whether or not a song is "liked"

```js
return (
  <tr
    key={this.props.index}
  >
    <td>{this.props.song.title}</td>
    <td>{this.props.song.artist}</td>
    <td>{this.props.song.time}</td>
    {this.state.love ? <td>&hearts;</td> : <td></td>}
  </tr>
)
```

Let's add a function to allow us to toggle the value:

```js
toggleLove() {
  this.setState({love : !this.state.love})
}
```

Finally, let's add an `onClick` that will allow us to toggle the value of `love` for each song - let's put it on the whole row so our user can click anywhere on the row

```js
<tr
  key={this.props.index}
  onClick={this.toggleLove}
>
```

Now, we should be able to click on the item and toggle the heart.

<!--SEI1 2:20 -->

## Extra Challenges

- double click the song name to delete it from the list
- add functionality that lets you click on an icon (arrow?) of two songs and then swaps their order
- Allow for multiple playlists to be rendered, when adding a new song, let a user select a playlist to add to or to create a new playlist
- Add some sweet sweet css style!
