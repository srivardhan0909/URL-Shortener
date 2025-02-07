const express = require('express')

const URLrouter = require('./routes/url')
const staticRouter = require('./routes/staticRouter')
const userRouter = require('./routes/user')
const { restrictTologin , checkAuth} = require('./middlewares/auth')

const dotenv = require('dotenv').config()
const path = require('path')
const cookieParser = require('cookie-parser')

const URL = require('./models/url')
const User = require('./models/user')
const { connectMongodb } = require('./connect')
// console.log(connectMongodb)
const app = express()


connectMongodb(process.env.MONGODB_URL).then(() =>
    console.log('Connected to database')
)

app.set("view engine", "ejs")
app.set("views" , path.resolve("./views"))


app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())

app.use('/url', restrictTologin, URLrouter)
app.use('/', checkAuth, staticRouter)
app.use('/user', userRouter)

app.get('/url/:shortId', async (req, res) => {
  const shortId = req.params.shortId
  const url = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timestamp: new Date(),
        },
      },
    }
  )
  res.redirect(url.redirectedId)
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
