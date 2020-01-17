var express = require('express');
var router = express.Router();
var signup = require('../db/api/signup')

// get data from user and sent to mysql db in a router.post as sql insert statment

router.post('/', function(req, res, next) {
    const {firstName, lastName,email, password, phone} = req.body;
    if(!firstName || !lastName || !email || !password || !phone) {
        res.send('all fields are required');
        return;
    }else{
        signup.addUser(firstName, lastName,email, password, phone)
        .then(success => res.status(200).json({status: 200, success: success}))
        .catch(error => res.status(401).json({status: 401, error: 'one of more of the inputs are invalid! '}))
    }
});

module.exports = router;