import React from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './components/PlayList.js'
import playlists from './data.js'
console.log(playlists);

class App extends React.Component {
  state = {
    playlists,
    title: '',
    artist: '',
    time: '0:00'
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time
    }
    const updatedSongs = [ ...this.state.playlists.songs, newSong ]
    this.setState({
      playlists: {
        ...this.state.playlists,
        songs: updatedSongs
      },
      title: '',
      artist: '',
      time: '0:00'
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Tunr</h1>
        </header>
        <Playlist
          playlists={this.state.playlists}
          title={this.state.title}
          artist={this.state.artist}
          time={this.state.time}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
