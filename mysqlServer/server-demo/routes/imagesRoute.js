var express = require('express');
var router = express.Router();
const images = require('../db/api/images');


router.get('/', function(req, res, next){
    images.allApartmentsImages()
    .then(image => res.status(200).json(image))
    .catch(error => res.status(500).json({error: error.message}))
});

router.get('/:apartmentId', function(req, res, next){
    images.imageByApartmentId(req.params.apartmentId)
    .then(image => res.status(200).json(image))
    .catch(error => res.status(500).json({error: error.message}))
});



module.exports = router;
