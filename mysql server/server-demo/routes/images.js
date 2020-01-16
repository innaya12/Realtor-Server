var express = require('express');
var router = express.Router();
const images = require('../db/api/images');

router.get('/images', function(req, res, next){
    images.allImages()
    .then(image => res.status(200).json(image))
    .catch(error => res.status(500).json({error: error.message}))
});


// router.get('/images', function(req, res, next){
//     images.ImagesById(req.params.apartmentId)
//     .then(image => res.status(200).json(image))
//     .catch(error => res.status(500).json({error: error.message}))
// });
module.exports = router;
