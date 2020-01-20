var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var login = require('../db/api/login')

// currently not in use- saved for future development 

router.get('/', function(req, res, next){
    login.getAllUsers(req.query)
    .then(apartment => res.status(200).json(apartment))
    .catch(error => res.status(500).json({error: error.message}))
});


router.post('/', async (req, res, next) => {
    // console.log("req.body",req.body)
    const {email , password} = req.body;
    if(!email || !password) {
        res.send('Email or password are required');
        return;
    }else{
        try{
            let cryptPassword = crypto.pbkdf2Sync(password, 'realtorrocks', 100000, 64, 'sha512'); 
            const passwordHashed = cryptPassword.toString('base64');
            const user = await login.checkLogin(email, passwordHashed);
            
            res.cookie('auth', JSON.stringify(user), {maxAge: 1000* 60* 60* 24* 7});
            res.status(200).json(user);
        }catch(error){
            res.status(401).json({status: 401, error: 'Invalid email or password'});
        }
    }
});

module.exports = router;