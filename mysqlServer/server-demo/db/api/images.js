const connection = require('../config');

function allApartmentsImages() {
    return new Promise((resolve, reject) => {
        connection.query('Select * from images',(error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

function imageByApartmentId(apartmentId) {
    return new Promise((resolve, reject) => {
        connection.query('Select * from images Where apartment_id = ?',[apartmentId], (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}


module.exports = {
    allApartmentsImages,
    imageByApartmentId
};
