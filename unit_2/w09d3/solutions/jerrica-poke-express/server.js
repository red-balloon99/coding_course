// ======================================================
//                   DEPENDENCIES
// ======================================================
const express = require('express')
const app = express()
const port = 3000

//models
const pokemon = require('./models/pokemon.js')

// ======================================================
//                   MIDDLEWARE
// ======================================================
app.use(express.static('public'))

// ======================================================
//                   ROUTES
// ======================================================
// get welcome index
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
})

// get pokemon index
app.get('/pokemon', (req, res) => {
  // capitalizing just the first letter by looping through the pokemon database
  for (let poke of pokemon) {
    // split the name into its each individual letter
    let splitName = poke.name.split('')
    // capitalize the first letter
    splitName[0] = splitName[0].toUpperCase()
    // join the letters back together
    poke.name = splitName.join('')
  }
  // render
  res.render('index.ejs', {
    pokemon: pokemon
  })
})

// show specific pokemon
app.get('/pokemon/:indexOfPokemon', (req, res) => {
  //render
  res.render('show.ejs', {
    pokemon: pokemon[req.params.indexOfPokemon]
  })
})

// ======================================================
//                   LISTENERS
// ======================================================
app.listen(port, () => {
  console.log(`connected to poke express! on port: ${port}`)
})
