// function what(d){
//     let str = '';
//     let b = false;
//     while(d++ > 5){
//         b = d <10
//         if(b) {
//             console.log("inside b")
//             console.log("inside b d" +d)
//             continue
//         }
//         if(d/2 >=6 ){
//             console.log("inside 2")
//             console.log("inside 2 d" +d)
//             str += d;
//             console.log("str", str);
//         }
//         d/=2;
//         console.log("inside 3")
//         console.log("inside 3 d" +d)
//     }
//     console.log(str);
// }
// what(45);

// class Sandwich{
//     constructor(){
//         this.sandwich = {}
//     }
//     getToping(topping){
//         this.sandwich[topping] = 1
//         return this;
//     }
//     toString(){
//         console.log(this.sandwich)
//     }
// }

// // let sandwich = {bun: 1, tomatto:0, onion:0, bacon:0, egg:0, mayo:0}
// // console.log(sandwich)
// // sandwich.bacon +=1 
// // console.log(sandwich)

// let hamburger1 = new Sandwich();
// hamburger1.toString();
// hamburger1
//     .getToping("tomatto")
//     .getToping("onion");
// console.log("hamburger1")
// hamburger1.toString();
// let hamburger2 = new Sandwich();
// hamburger2
//     .getToping("bacon")
//     .getToping("egg")
// console.log("hamburger2")
// hamburger2.toString();

//This version is using what we've done last week:

function getAll({customerId, city, country, page = 1, size = 10}) {
    return new Promise((resolve, reject) => {
        const params = [];
        const query = `Select * from Customers 
        where (${!customerId ? '1' : (params.push(customeId), 'CustomerID = ? ')})
         and
         (${!city ? '1' : (params.push(city), ' City = ? ')})
         and 
         (${!country ? '1' : (params.push(country), ' Country = ? ')})
         limit ${(page-1)*size}, ${size}`;
         
        connection.query(query, params, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

//Using Builder
//Complete the code

function getAll({customerId, city, country, page = 1, size = 10}) {
    return new Promise((resolve, reject) => {
        const {query,params} = Builder.allCustomers(page, size)
                        .customerId(customerId)
                        .city(city)
                        .country(country)
                        .build();
        console.log(query, params);


        // connection.query(query, params, (error, results, fields) => {
        //     if (error) {
        //         reject(error);
        //         return;
        //     }
        //     resolve(results);
        // });
    });
}







function getAll({id, user_id, city_id,price, number_of_room, number_of_bath, page = 1, size = 10}) {
    const builder = new Builder();
    return new Promise((resolve, reject) => {
        const {query,params} = builder.allApartments(page, size)
                        .id(id)
                        .user_id(user_id)
                        .city_id(city_id)
                        .price(price)
                        .number_of_room(number_of_room)
                        .number_of_bath(number_of_bath)
                        .build()
        connection.query(query, [...params,page,size], (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}