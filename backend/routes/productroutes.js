const express=require('express');
const { createproduct, getproducts }=require('../controllers/productcontroller')
const routes=express.Router()


//routes
routes.post('/products',createproduct);
routes.get('/products',getproducts)


module.exports=routes