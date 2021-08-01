const express= require('express')
/* const User = require('../models/user')*/
const router = express.Router()

  router.get('/login', (req, res) => {
    res.render('user/pages/login',{ title: 'Đăng nhập' })
  })
  
  router.post('/login', (req, res) => {
  
  })
  
  router.get('/register', (req, res) => {
    res.render('user/pages/register',{ title: 'Đăng kí' })
  })
  
  router.post('/register', async (req, res) => {
    try{
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      
    }
  })

module.exports = router