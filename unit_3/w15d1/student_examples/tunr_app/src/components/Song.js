import React from 'react'

class Song extends React.Component {
  state = {
    liked: false
  }
  toggleLiked = () => {
    this.setState({
      liked: !this.state.liked
    })
  }
  render() {
    return (
      <tr onClick={this.toggleLiked}>
        <td>{this.props.song.artist}</td>
        <td>{this.props.song.title}</td>
        <td>{this.props.song.time}</td>
        {this.state.liked ? <td>&hearts;</td> : <td></td>}
      </tr>
    )
  }
}

export default Song
