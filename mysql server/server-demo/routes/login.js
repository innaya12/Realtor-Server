var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var login = require('../db/api/login')

router.post('/', function(req, res, next) {
    const {email , password} = req.body;
    if(!email || !password) {
        res.send('fields are required email or password');
        return;
    }else{
        let cryptPassword = crypto.pbkdf2Sync(password, 'realtorrocks', 100000, 64, 'sha512'); 
        const passwordHashed = cryptPassword.toString('base64');
        console.log("passwordHashed", passwordHashed)
        login.checkLogin(email, passwordHashed)
        .then(([user]) => {
            res.cookie('auth', JSON.stringify(user), {maxAge: 1000* 60* 60* 24* 7});
            console.log(req.cookies);   
            res.status(200).json(user)
        }).catch(error => res.status(401).json({status: 401, error: 'Invalid email or password'}))
    }
});

module.exports = router;
