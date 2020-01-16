
var express = require('express');
var router = express.Router()

let ordersList =  [{id:100, userId: 1, price: 90.5}, {id:101, userId: 2, price: 199}, {id:102, userId: 1, price: 12.85}]
/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.send(ordersList);
  res.end();
});

router.get('/:orderId', function(req, res, next) {
    const order = ordersList.find(order => order.id == req.params.orderId) || {};
    res.send(order);
    res.end();
  })

router.post('/:orderID', function(req, res, next) {
    res.send('done');
    ordersList.push(req.body);
    res.end();
});


module.exports = {router, ordersList};