const express=require('express');
const { createproduct, getproducts ,getproductbyid}=require('../controllers/productcontroller')
const routes=express.Router()


//routes
routes.post('/products',createproduct);
routes.get('/products',getproducts);
routes.get('/products/:id',getproductbyid);


module.exports=routes