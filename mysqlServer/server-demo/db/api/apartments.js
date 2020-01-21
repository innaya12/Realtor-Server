const connection = require('../config');
const Builder = require('../api/builder');
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
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

function getAll({property_type,user_id, address, city_id, min_price, max_price, number_of_room, number_of_bath,sqft,sale_status, page = 1, size = 28}) {
    return new Promise((resolve, reject) => {
        console.log("city id builder", city_id)
        const {query,params} = Builder.allApartments(page, size)
                                        .property_type(property_type)
                                        .user_id(user_id)
                                        .address(address)
                                        .city_id(city_id)
                                        .price(min_price, max_price)
                                        .number_of_room(number_of_room)
                                        .number_of_bath(number_of_bath)
                                        .sqft(sqft)
                                        .sale_status(sale_status)
                                        .build();
        connection.query(query, [...params,page,size], (error, results, fields) => {
            console.log("final query", query)
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

function byId(apartmentId) {
    return new Promise((resolve, reject) => {
        connection.query('Select * from apartments Where id = ?',[apartmentId], (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {
    getAll,
    byId,
    addApartment,
     addImages
};
