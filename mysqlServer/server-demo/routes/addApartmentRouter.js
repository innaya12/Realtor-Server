var express = require('express');
var router = express.Router();
var addApartment = require('../db/api/addApartment');
const {isUser} = require('../middlewares/authentication');

router.post('/', function(req, res, next) {
// router.post('/', isUser, function(req, res, next) {
    const {address, price, number_of_room, number_of_bath, sqft, description, main_image} = req.body;
    if(!address || !price || !number_of_room || !number_of_bath || !sqft || !description || !main_image) {
        res.send('all fields are required');
        return;
    }else{
        addApartment.addApartment(address, price, number_of_room, number_of_bath, sqft, description, main_image)
        .then(success => res.status(200).json({status: 200, success: success}))
        .catch(error => res.status(401).json({status: 401, error: error}))
    }
});

// router.post('/', function(req, res, next) {
//     const {firstName, lastName,email, password, phone} = req.body;
//     if(!firstName || !lastName || !email || !password || !phone) {
//         res.send('all fields are required');
//         return;
//     }else{
//         signup.sendUser(firstName, lastName,email, password, phone)
//         .then(success => res.status(200).json({status: 200, success: success}))
//         .catch(error => res.status(401).json({status: 401, error: error}))
//     }
// });

module.exports = router;