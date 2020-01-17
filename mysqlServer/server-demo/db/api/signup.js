const connection = require('../config');
const query = 'insert into users (role_id, first_name, last_name, email, password, phone, status) values (2, ?, ?, ?, 123, ?,1)'

function addUser(firstName, lastName,email, password, phone){
    return new Promise((resolve, reject) => {
        connection.query(query, [firstName, lastName,email, password, phone], (error, results) => {
            if (error) {
                console.log("error", error)

                reject(error);
                return;
            }
            console.log("results", results)
            resolve(results);
        });
    });
}

module.exports = {addUser}