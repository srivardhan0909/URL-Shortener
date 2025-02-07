const User = require('../models/user')
const { v4:uuidv4} = require('uuid')
const {setUser}= require('../service/auth')

async function handleSignUp(req, res) {
  const { name, email, password } = req.body
  await User.create({
    name,
    email,
    password,
  })
  return res.redirect('/login')
}

async function handleLogin(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({
        email,
        password,
    })
    if(!user){
        return res.send('Invalid email or password')
    }
    const sessionId = uuidv4();
    setUser(sessionId,user)
    res.cookie('uid',sessionId)
    return res.redirect('/')
  }
  

module.exports = {
    handleSignUp,
    handleLogin,
}
