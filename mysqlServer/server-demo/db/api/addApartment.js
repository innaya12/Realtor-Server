
const connection = require('../config');
const queryAddApartment = 'insert into apartments (user_id, address, city_id, price,number_of_room, number_of_bath, sqft, description, sale_status, availability, property_type, main_image,status) values (3, ?, 1102251,?, ?, ?, ?, ?, 1, 1, 1, ?, 1)'
const queryAddimages = 'insert into users (role_id, first_name, last_name, email, password, phone, status) values (2, ?, ?, ?, 123, ?,1)'

function addApartment(address, price, number_of_room, number_of_bath, sqft, description, main_image){
    return new Promise((resolve, reject) => {
        // connection.query(fakeapquery, (error, results) => {
        connection.query(queryAddApartment, [address, price, number_of_room, number_of_bath, sqft, description, main_image], (error, results) => {
            if (error) {
                // console.log("error", error)
                reject(error);
                return;
            }
            // console.log("results", results)
            resolve(results);
        });
    });
}

function addImages(firstName, lastName,email, password, phone){
    return new Promise((resolve, reject) => {
        connection.query(queryAddimages, [firstName, lastName,email, password, phone], (error, results) => {
            if (error) {
                // console.log("error", error)
                reject(error);
                return;
            }
            // console.log("results", results)
            resolve(results);
        });
    });
}

module.exports = {addApartment, addImages}


















//insert into apartments (user_id, address, city_id, price,number_of_room, number_of_bath, sqft, description, sale_status, availability, property_type, main_image,status) 
//values (3, 'Ben Yehuda 4', '1102251', '152000', 2, 2, 220, 'NEW - 4 Hours ago', 1, 1, 1, 'images/apartment/apartment_4.jpg', 1)