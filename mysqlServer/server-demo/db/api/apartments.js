const connection = require('../config');
const Builder = require('../api/builder');

function getAll({property_type,user_id, address, city_id, price, number_of_room, number_of_bath,sqft,sale_status, page = 1, size = 20}) {
    return new Promise((resolve, reject) => {
        const {query,params} = Builder.allApartments(page, size)
                                        .property_type(property_type)
                                        .user_id(user_id)
                                        .address(address)
                                        .city_id(city_id)
                                        .price(price)
                                        .number_of_room(number_of_room)
                                        .number_of_bath(number_of_bath)
                                        .sqft(sqft)
                                        .sale_status(sale_status)
                                        .build();
        connection.query(query , [...params,page,size], (error, results, fields) => {
            // console.log("my query", query)
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
    byId
};
