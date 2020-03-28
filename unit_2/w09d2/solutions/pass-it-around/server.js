const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1> 99 Bottles of Beer on the wall </h1>
    <a href="/98">Take one down, pass it around</a>
    `)
});


app.get('/:numberOfBottles', (req, res) => {
  if (parseInt(req.params.numberOfBottles) === 0){
    res.send(`
        <a href='/'>No more beer!! Take me to moar beer!</a>
      `)
  } else {
    res.send(`
      <h1> ${req.params.numberOfBottles} Bottles of Beer on the wall </h1>
      <a href="${req.params.numberOfBottles - 1}">Take one down, pass it around</a>
      `)
  }
});


app.listen(port, ()=> {
  console.log('accepting all the beers here:', port);
});
