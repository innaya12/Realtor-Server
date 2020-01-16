const connection = require('../config');

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



module.exports = {checkLogin}