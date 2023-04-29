const User = require("../models.js/User")
const express = require('express');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const bodyParser = require('body-parser');
const app = express();


const JWT_SECRET = process.env.JWT_SECRET || 'defaultSecretValue';
const userSet = new Set();
app.use(bodyParser.json());
const register = (req, res) => {
  if(req.body.name != null && userSet.has(req.body.name)) return res.json({
    message: "Username is already registered" 
  })
  userSet.add(req.body.name);
  bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
    if (err) {
      return res.status(500).json({ error: err });
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    })

    user.save()
    .then(user => {
      res.json({ message: "User Added Successfully!" })
    })
    .catch(error => {
      res.status(500).json({ error: error })
    })
  })
}

const login = (req, res, next) => {
  let userName = req.body.name;
  let password = req.body.password;
  console.log(userName);
  User.findOne({ name: userName })
    .then(user => {
      console.log(user);
      if (!user) {
        return res.status(401).json({ message: 'Either userName or password not match!' });
      }

      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          return res.status(500).json({ error: err })
        }
        if (result) {
          let token = jwt.sign({ name: user.name }, JWT_SECRET, { expiresIn: '1h' })
          res.json({ message: 'Login Successful!', token })
        } else {
          return res.status(401).json({ message: 'Either userName or password not match!' })
        }
      })
    })
    .catch(error => {
      res.status(500).json({ error: error })
    })
}
const updateDescription = (req,res,next) => {
  let userName = req.body.name;
  let newDescription = req.body.description;
  console.log(newDescription);
  User.findOneAndUpdate({name:userName}, {$set:{description:newDescription}})
  .then((resonse) => {
    res.json({
        message: "Description updated!"
    })
})
.catch((e) => {
    res.json({
        message: e
    })
})
}
 const getDescription = (req,res,next) => {
  const name = req.params.name;
  console.log("1");
  console.log(name);
  User.find({name})
  .then((response) => {
    res.json(
        {response}
    )
})
.catch((e) => res.json({
    message: e
}) )
 }

module.exports = { register, login, updateDescription, getDescription }
