var express = require('express');
var router = express.Router();
const apartments = require('../db/api/apartments');
const {isUser} = require('../middlewares/authentication');

router.get('/', function(req, res, next){
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

router.get('/:UserId', function(req, res, next){
    apartments.byUserId(req.params.UserId)
    .then(apartment => res.status(200).json(apartment))
    .catch(error => res.status(500).json({error: error.message}))
});
// router.post('/', function(req, res, next) {
router.post('/', isUser, function(req, res, next) {
        const {user_id, address, city_id, price, number_of_room, number_of_bath, sqft, description, main_image} = req.body;
        if(!user_id || !address || !city_id ||!price || !number_of_room || !number_of_bath || !sqft || !description || !main_image) {
            res.send('all fields are required');
            return;
        }else{
            apartments.addApartment(address, price, number_of_room, number_of_bath, sqft, description, main_image)
            .then(success => {
                res.status(200).json({status: 200, success: success})})
            .catch(error => {
                res.status(401).json({status: 401, error: error})})

            }
        }
    );
    
module.exports = router;
