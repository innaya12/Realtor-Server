const connection = require('../config');

// currently not in use- saved for future development 
function getAllUsers(){
    return new Promise((resolve, reject) => {
        connection.query('Select * from users',(error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

function checkLogin(email, passwordHashed){
    return new Promise((resolve, reject) => {
        const query = 'select * from users where email = ? and password = ?'
        connection.query(query, [email, passwordHashed], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {checkLogin, getAllUsers}