class ApartmentsBuilder{
    constructor(page, size){
        this.query = 'Select * from apartments where 1 ';
        // this.query = 'Select * from apartments A join images I on A.id = I.apartment_id where 1';
        this.params = [];
        this.page = page;
        this.size = size;
    }
    property_type = (property_type) => {
        if(property_type){
            this.params.push(property_type);
            this.query += ' and property_type = ?';
        }
        return this;
    };
    user_id = (user_id) => {
        if(user_id){
            this.params.push(user_id);
            this.query += ' and user_id = ?';
        }
        return this;
    };
    address = (address) => {
        if(address){
            this.params.push(address);
            this.query += ' and address = ?';
        }
        return this;
    };
    city_id = (city_id) => {
        if(city_id){
            this.params.push(city_id);
            this.query += ' and city_id = ?';
        }
        return this;
    };
    price = (min_price, max_price) => {
        if(min_price){
            this.params.push(min_price);
            this.query += ' and price BETWEEN ?';
        }
        if(max_price){
            this.params.push(max_price);
            this.query += ' and ?';
        }
        return this;    
    }
    number_of_room = (number_of_room) => {
        if(number_of_room){
            this.params.push(number_of_room);
            this.query += ' and number_of_room = ?';
        }
        return this;    
    }
    number_of_bath = (number_of_bath) => {
        if(number_of_bath){
            this.params.push(number_of_bath);
            this.query += ' and number_of_bath = ?';
        }
        return this;  
    }
    sqft = (sqft) => {
        if(sqft){
            this.params.push(sqft);
            this.query += ' and sqft = ?';
        }
        return this;  
    };
    sale_status = (sale_status) => {
        if(sale_status){
            this.params.push(sale_status);
            this.query += ' and sale_status = ?';
        }
        return this;  
    };

    build = () => {
        this.query += ` limit ${(this.page-1)*this.size}, ${this.size};`
        // this.query += ` limit ${(this.page-1)*this.size}, 200;`
        return {query: this.query, params: this.params};
    }
}
class Builder{
    static allApartments = (page, size) => {
        return new ApartmentsBuilder(page, size);
    }
}

module.exports = Builder;