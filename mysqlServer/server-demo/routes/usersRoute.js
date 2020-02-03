var express = require('express');
var router = express.Router();
const users = require('../db/api/users');
const {isAdmin} = require('../middlewares/authentication');

// router.get('/', {isAdmin}, function(req, res, next){
router.get('/',  function(req, res, next){
    users.getAll(req.query)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(500).json({error: error.message}))
});

module.exports = router;