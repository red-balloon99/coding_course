/* global ReactDOM:true */
/* global React:true */
/* global fetch:true */

class Play extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: [],
      reveal: false
    }
    this.toggleReveal = this.toggleReveal.bind(this)
  }
  toggleReveal () {
    this.setState({
      reveal: !this.state.reveal
    })
  }
  getQuery () {
    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          query: data[0],
          reveal: false
        })
        this.props.pointsChange(data[0].value)
      })
  }
  componentDidMount () {
    this.getQuery()
  }
  render () {
    return (
      <div className='play'>
        <h2><span>Lets Play!</span></h2>
        <button className='question-button' onClick={this.getQuery.bind(this)}>Get Question</button>
        <h3><span>Catergory: </span> {this.state.category}</h3>
        <h4><span>Points: </span> {this.state.query.value}</h4>
        <h4><span>Answer: </span> {this.state.query.question}</h4>
        <div className='reveal'>
          <h4 onClick={this.toggleReveal}>Click to Reveal Question</h4>
        </div>
        {this.state.reveal ? <h4><span>Question: </span> {this.state.query.answer}</h4> : ''}
      </div>
    )
  }
}

class Scoreboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0
    }
    this.updateScore = this.updateScore.bind(this)
  }
  updateScore (modify, points) {
    if (!points) {
      points = 1
    }
    switch (modify) {
      case '-':
        this.setState({
          score: this.state.score - points
        })
        break
      case '+':
        this.setState({
          score: this.state.score + points
        })
        break
      case 'r':
        this.setState({
          score: 0
        })
        break
      default:
        console.log('oops! something went wrong')
    }
  }
  render () {
    return (
      <div className='scoreboard'>
        <h2><span>Score: </span> {this.state.score}</h2>
        <button className='decrease' onClick={() => this.updateScore('-', this.props.points)}>Decrease</button>
        <button className='increase'onClick={() => this.updateScore('+', this.props.points)}>Increase</button>
        <button className='reset' onClick={() => this.updateScore('r')}>Reset</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      points: 0
    }
    this.handlePointsChange = this.handlePointsChange.bind(this)
  }
  handlePointsChange (points) {
    this.setState({points: points})
  }
  render () {
    return (
      <div>
        <h1> Welcome to Jeopardy! </h1>
        <Scoreboard
          points={this.state.points}
          pointsChange={this.handlePointsChange}
        />
        <Play
          points={this.state.points}
          pointsChange={this.handlePointsChange}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
