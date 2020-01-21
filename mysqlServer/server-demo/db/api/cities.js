const connection = require('../config');
const query = 'SELECT * FROM cities where country_id = ?';


function cityByCountryId(countryId) {
    return new Promise((resolve, reject) => {
        connection.query(query,[countryId], (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}


function getAll() {
    return new Promise((resolve, reject) => {
        connection.query('Select * from cities',(error, results, fields) => {
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
    cityByCountryId
};
