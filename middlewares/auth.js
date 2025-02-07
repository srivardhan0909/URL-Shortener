const { getUser } = require('../service/auth')

async function restrictTologin(req, res, next) {
  const userId = req.cookies ? req.cookies.uid : null
  if (!userId) {
    return res.redirect('/login')
  }

  const user = await getUser(userId)
  if (!user) {
    return res.redirect('/login')
  }
  req.user = user
  next()
}

async function checkAuth(req, res, next) {
  const userId = req.cookies ? req.cookies.uid : null

  const user = await getUser(userId)
  req.user = user
  next()
}

module.exports = {
  restrictTologin,
  checkAuth,
}
