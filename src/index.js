const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

console.log(path.join(__dirname, 'public'))
//Template engine
app.engine('hbs', hbs.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
// app.set('views', './src/resources/views')
app.set('views', path.join(__dirname, 'resources', 'views'))



app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})