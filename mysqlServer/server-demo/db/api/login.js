const connection = require('../config');
const loginQuery = 'select * from users where email = ? and password = ?';
const getUsersQuery = 'Select * from users';

// currently not in use- saved for future development 

function getAllUsers(){
    return new Promise((resolve, reject) => {
        connection.query(getUsersQuery ,(error, results, fields) => {
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
            connection.query(loginQuery, [email, passwordHashed], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results[0]);
        });
    });
}

module.exports = {checkLogin, getAllUsers}