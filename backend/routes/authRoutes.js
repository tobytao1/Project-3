const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')
var app = express()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const AuthController = require("../controllers/AuthController")

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/updateDescription',AuthController.updateDescription)
router.get('/getDescription/:name',AuthController.getDescription);

module.exports = router