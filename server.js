const express = require('express')
const mongoose = require('mongoose')
/* const User = require('./models/user') */
const userRouter = require('./routes/users')
const bcrypt = require('bcrypt')
const app = express()
const port = 3000

const morgan = require('morgan')
const path = require('path')

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'))

app.use(express.urlencoded({ extended: false }))

/* mongoose.connect('mongodb:localhost/blog',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true }) */

app.get('/', (req, res) => {
  res.render('user/pages/home',{ title: 'Blog nhà làm' })
})

app.use('/',userRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

