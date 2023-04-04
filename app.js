const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(3000, () => {
  console.log('App listening on port 3000')
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/resume', (req, res) => {
  res.render('resume')
})

app.get('/draw', (req, res) => {
  res.render('draw')
})

app.get('/tictactoe', (req, res) => {
  res.render('tictactoe')
})

app.get('/rps', (req, res) => {
  res.render('rps')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})