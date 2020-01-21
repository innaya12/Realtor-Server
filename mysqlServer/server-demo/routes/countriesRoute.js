var express = require('express');
var router = express.Router();
const countries = require('../db/api/countries');

router.get('/', function(req, res, next){
    countries.getAll(req.query)
    .then(country => res.status(200).json(country))
    .catch(error => res.status(500).json({error: error.message}))
});

module.exports = router;
