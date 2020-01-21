const connection = require('../config');


function getAll() {
    return new Promise((resolve, reject) => {
        connection.query('Select * from countries',(error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {
    getAll
};
