const express=require('express');
const { createcart, getcarts, getcartsByuser, upadtecart }=require('../controllers/cartcontroller')
const routes=express.Router()


//routes
routes.post('/cart',createcart);
routes.get('/cart',getcarts);
routes.get('/cart/:userid',getcartsByuser);
routes.put('/cart/:cartid',upadtecart)


module.exports=routes