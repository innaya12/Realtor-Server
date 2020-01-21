var express = require('express');
var router = express.Router();
const cities = require('../db/api/cities');

router.get('/', function(req, res, next){
    cities.getAll(req.query)
    .then(city => res.status(200).json(city))
    .catch(error => res.status(500).json({error: error.message}))
});

router.get('/:countryId', function(req, res, next){
    cities.cityByCountryId(req.params.countryId)
    .then(city => res.status(200).json(city))
    .catch(error => res.status(500).json({error: error.message}))
});


module.exports = router;
