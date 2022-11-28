
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')
const app = express()
const port = 8888

//HTTP logger
app.use(morgan('combined'))

//templates engines
app.engine('hbs', engine({
  extname: '.hbs'
}))
// tury cập vào file tĩnh
app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'))
console.log(path.join(__dirname, 'resources/views'))



app.get('/', (req, res) => { 
  res.render('home')

 
})
app.get('/news', (req, res) => { 
  res.render('news')

 
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})