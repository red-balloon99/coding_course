const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res)=>{
  res.render('ninety-nine.ejs')
});

app.get('/:numberOfBottles', (req, res) => {
  res.render('passing-beers.ejs', {
    bottlesRemaining : req.params.numberOfBottles
  })
})

app.listen(port, ()=>{
  console.log('I like EJS with my beer on port', port);
})
