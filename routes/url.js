const express = require('express')
const { handleGetshortURL} = require('../controllers/url')
const router = express.Router()

router.post('/' , handleGetshortURL)

module.exports = router