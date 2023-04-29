const Tweets = require("../models.js/Tweets");

const getTweets = (req,res) => {
    console.log(req.body);
    Tweets.find()
    .then((response) => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: error
        })
    })
}

const getTweet = (req,res) => {
    const tweetId = req.body.tweetId;
    Tweets.findById(tweetId)
    .then((response) => {
        res.json(
            {response}
        )
    })
    .catch((e) => res.json({
        message: e
    }) )
}

const getPersonalTweet = (req,res) => {
    const userName = req.params.user;
    Tweets.find({user:userName})
    .then((response) => {
        res.json(
            {response}
        )
    })
    .catch((e) => res.json({
        message: e
    }) )
}

const createTweet = (req, res) => {
    const Tweet = new Tweets({
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        user:req.body.user,
    })
    Tweet.save()
    .then((response) => {
        res.json({
            message: "Tweet created successfully!"
        })
    })
    .catch((e) => {
        console.log(e);
        res.json({
            message: "An error occurred!"
        })
    })
}

const updateTweet = (req,res) => {
    let tweetId = req.body.tweetId;

    const updatedTweetData = {
        content: req.body.content,
        imageUrl:req.body.imageUrl
    }

    Tweets.findByIdAndUpdate(tweetId, {$set: updatedTweetData})
    .then((resonse) => {
        res.json({
            message: "Tweet updated!"
        })
    })
    .catch((e) => {
        res.json({
            message: e
        })
    })
}

const deleteTweet = (req, res) => {
    let tweetId = req.body.tweetId;
    Tweets.findByIdAndRemove(tweetId)
    .then((response) => {
        res.json({
            message: 'Tweet deleted successfully!'
        })
    })
    .catch(e => {
        res.json({
            message: e
        })
    })
}
module.exports = {
    getTweets,
    getTweet,
    updateTweet,
    createTweet,
    deleteTweet,
    getPersonalTweet
} 