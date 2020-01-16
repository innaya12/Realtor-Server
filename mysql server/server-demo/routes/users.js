var express = require('express');
var router = express.Router();
const connection = require('../db/config');

var copyOrderList = require('./orders').ordersList;
var usersList = [{id:1, name:'Shahar', age:78},{id:2, name:'Yusuf', age:20}]

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send(usersList);
//   res.end();
// });

router.get('/', function(req, res, next) {
  res.send("here");
  res.end();
});

router.get('/:userId', function(req, res, next) {
  const user = usersList.find(user => user.id == req.params.userId) || {};
  res.send(user);
  res.end();
});

router.get('/:userId/:orderId', function(req, res, next) {
  const user = usersList.find(user => user.id == req.params.userId) || {};  
  const order = copyOrderList.find(order => order.userId == req.params.userId) || {};
  res.send(order);
  res.end();
});

// router.post('/login', function(req, res, next) {
//   console.log(req.body);
//   res.send('done');
//   res.end();
// });
//
// connection.query('select * from users where first_name = req.body.name', (error, resolve)=>{
//     if(error){
//       console.log(error)
//     } else{
//       console.log(resolve)
//     }
// });


module.exports = router;
