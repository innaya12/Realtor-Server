var express = require('express');
var router = express.Router();
const apartments = require('../db/api/apartments');

router.get('/:UserId', function(req, res, next){
    apartments.byUserId(req.params.UserId)
    .then(apartment => res.status(200).json(apartment))
    .catch(error => res.status(500).json({error: error.message}))
});

    
module.exports = router;
