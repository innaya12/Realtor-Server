var express = require('express');
var router = express.Router();
const apartments = require('../db/api/apartments');

// const {isUser} = require('../middlewares/authentication');

// router.get('/', isUser, function(req, res, next){
router.get('/', function(req, res, next){
    // console.log("req.cookies", req.cookies);    
    apartments.getAll(req.query)
    .then(apartment => res.status(200).json(apartment))
    .catch(error => res.status(500).json({error: error.message}))
});

router.get('/', function(req, res, next){
    apartments.filter(req.query)
    .then(apartment => res.status(200).json(apartment))
    .catch(error => res.status(500).json({error: error.message}))
});

router.get('/:apartmentId', function(req, res, next){
    apartments.byId(req.params.apartmentId)
    .then(apartment => res.status(200).json(apartment))
    .catch(error => res.status(500).json({error: error.message}))
});


module.exports = router;
