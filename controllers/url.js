const shortid = require('shortid')
const URL = require('../models/url')

async function handleGetshortURL(req,res) {
    const body = req.body;
    if(!body.url){
        return res.status(400).json({ msg : "URL is required"})
    }
    const shortId = shortid()
    await URL.create({
        shortId : shortId,
        redirectedId : body.url,
        visitedHistory : [],
        createdBy : req.user._id,
    })

    return res.render('home',{
        shortId: shortId
    })
    // return res.status(200).json({ shortId : shortId})
}

module.exports = {
    handleGetshortURL,
}