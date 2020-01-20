var express = require('express');
var router = express.Router();
const countries = require('../db/api/countries');

router.get('/', function(req, res, next){
    countries.getAll(req.query)
    .then(apartment => res.status(200).json(apartment))
    .catch(error => res.status(500).json({error: error.message}))
});

// router.get('/', function(req, res, next){
//     apartments.getAll(req.query)
//     .then(apartment => res.status(200).json(apartment))
//     .catch(error => res.status(500).json({error: error.message}))
// });

// router.get('/:apartmentId', function(req, res, next){
//     apartments.byId(req.params.apartmentId)
//     .then(apartment => res.status(200).json(apartment))
//     .catch(error => res.status(500).json({error: error.message}))
// });


module.exports = router;
