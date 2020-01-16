const connection = require('../config');


function allImages() {
    return new Promise((resolve, reject) => {
        connection.query('Select * from images',(error, results, fields) => {
            if (error) {
                console.log("error images", error)
                reject(error);
                return;
            }
            console.log("results images", results)
            resolve(results);
        });
    });
}
function ImagesById(apartmentId) {
    return new Promise((resolve, reject) => {
        connection.query('Select * from images Where apartment_id = ?',[apartmentId], (error, results, fields) => {
            if (error) {
                console.log("error images", error)
                reject(error);
                return;
            }
            console.log("results images", results)
            resolve(results);
        });
    });
}


module.exports = {
    allImages,
    ImagesById
};
