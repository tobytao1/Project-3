const express = require('express')
const router =express.Router()

const TweetsController = require("../controllers/TweetsController");
const authenticate = require('../middleware/authenticate');

router.get('/',TweetsController.getTweets);
router.get('/getTweet',TweetsController.getTweet);
router.get('/getPersonalTweet',TweetsController.getPersonalTweet);
router.post('/update',TweetsController.updateTweet);
router.post('/create',TweetsController.createTweet);
router.post('/delete',TweetsController.deleteTweet);

module.exports = router