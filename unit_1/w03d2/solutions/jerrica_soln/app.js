// =======================================
//       TOOL BOX & PLAYER OBJECTS
// =======================================
// toolbox
const tools = [
  {
    name: 'teeth',
    wage: 1,
    cost: 0
  },
  {
    name: 'scissors',
    wage: 5,
    cost: 5
  },
  {
    name: 'an old-timey push lawnmower',
    wage: 50,
    cost: 35
  },
  {
    name: 'a battery-powered lawnmower',
    wage: 100,
    cost: 250
  },
  {
    name: 'a starving team of students',
    wage: 250,
    cost: 500
  }
]

//  player object
let player = {
  currentTool: tools.shift(),
  bankAccount: 0
}

// =======================================
//          START METHOD
// =======================================
const startGame = () => {
  alert('Cut lawns, make money.')
  showStatus()
  askForAction()
}

// =======================================
//          GAME METHODS
// =======================================
// show current status
const showStatus = () => {
  alert('Current tool: ' + player.currentTool.name + ' // Currently in the bank: $' + player.bankAccount)
}

// cutting the grass
const cutGrass = () => {
  // increase player's bank account
  player.bankAccount += player.currentTool.wage
  // alert player  of what happened
  alert('Let\'s get to work! You cut the grass with ' + player.currentTool.name + ' and made $' + player.currentTool.wage + ' today!')
  // check if win condition is met
  checkWin()
}

// buying a tool
const buyTool = () => {
  // check if they can afford the tool or not
  if (player.bankAccount >= tools[0].cost) {
    // decrement their bank account by the next tool's cost
    player.bankAccount -= tools[0].cost
    // set the player's tool to the next available tool
    player.currentTool = tools.shift()
    // show status and call to action
    alert('You just bought ' + player.currentTool.name + ' for $' + player.currentTool.cost)
    showStatus()
    askForAction()
  } else {
    alert('You can\'t afford ' + tools[0].name + ' yet! Keep working first!')
    askForAction()
  }
}

// asking for action
const askForAction = () => {
  // initilalize playerChoice
  let playerChoice
  // ask for player input
  // if more tools are still available
  if(tools.length > 0) {
    playerChoice = prompt(`What do you want to do? // Next available tool: ${tools[0].name} ($${tools[0].cost}) // Your bank account: $${player.bankAccount}`, "landscape / buy new tool")
  } else {
    playerChoice = prompt(`No more tools left, just keep landscaping until you make $1000`, "landscape")

  }
  // move to next method depending on input
  if (playerChoice.toLowerCase() === 'landscape') {
    cutGrass()
  } else if (playerChoice.toLowerCase() === 'buy new tool' && tools.length > 0) {
    buyTool()
  } else {
    alert('Option unavailable, please try again!')
    askForAction()
  }
}

// checking the win condition
const checkWin = () => {
  // if player meets win condition
  if(player.bankAccount >= 1000 && player.currentTool.name === 'a starving team of students') {
    // alert that they won the game, game stops
    alert('you won the game!')
  } else {
    // else, continue the game
    showStatus()
    askForAction()
  }
}

// =======================================
//           START GAME ON LOAD
// =======================================
startGame()
