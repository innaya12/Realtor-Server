var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var login = require('../db/api/login')

router.post('/', async (req, res, next) => {
    console.log("req.body",req.body)
    const {email , password} = req.body;
    if(!email || !password) {
        res.send('Email or password are required');
        return;
    }else{
        try{
            let cryptPassword = crypto.pbkdf2Sync(password, 'realtorrocks', 100000, 64, 'sha512'); 
            const passwordHashed = cryptPassword.toString('base64');
            const user = await login.checkLogin(email, passwordHashed);
            console.log("user", user)
            res.cookie('auth', JSON.stringify(user), {maxAge: 1000* 60* 60* 24* 7});
            res.status(200).json(user);
        }catch(error){
            res.status(401).json({status: 401, error: 'Invalid email or password'});
        }
    }
});

module.exports = router;