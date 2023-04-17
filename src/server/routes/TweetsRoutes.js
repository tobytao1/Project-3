const express = require('express')
const router =express.Router()

const TweetsController = require("../controllers/TweetsController");

router.get('/getTweets',TweetsController.getTweets);
router.get('/getTweet',TweetsController.getTweet);
router.post('/update',TweetsController.updateTweet);
router.post('/create',TweetsController.createTweet);
router.post('/delete',TweetsController.deleteTweet);

module.exports = router