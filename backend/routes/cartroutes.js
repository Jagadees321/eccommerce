const express=require('express');
const { createcart, getcarts }=require('../controllers/cartcontroller')
const routes=express.Router()


//routes
routes.post('/cart',createcart);
routes.get('/cart',getcarts);


module.exports=routes