import React from 'react'
import Song from './Song'

class PlayList extends React.Component {
  render() {
    return (
      <div className="playlist">
        <h3>{this.props.playlists.title}</h3>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor='title'>Title: </label>
          <input type='text' value={this.props.title} id='title' onChange={this.props.handleChange}/>
          <label htmlFor='artist'>Artist: </label>
          <input type='text' value={this.props.artist} id='artist' onChange={this.props.handleChange}/>
          <label htmlFor='time'>Time: </label>
          <input type='text' value={this.props.time} id='time' onChange={this.props.handleChange}/>
          <input type='submit'/>
        </form>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.playlists.songs.map((song, index) =>
                <Song
                  song={song}
                  key={index}
                />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default PlayList
