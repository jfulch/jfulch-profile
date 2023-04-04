const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/resume', (req, res) => {
  res.render('resume')
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})