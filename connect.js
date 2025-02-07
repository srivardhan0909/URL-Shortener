const mongoose = require('mongoose')

async function connectMongodb(url) {
  return mongoose.connect(url)
}
// console.log(connection)
module.exports = {
  connectMongodb,
}
