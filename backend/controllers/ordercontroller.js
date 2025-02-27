const ordermodel=require('../models/ordermodel');
const usermodel = require('../models/usermodel');
const productmodel = require('../models/productmodel');

const createorder=async(req,res)=>{
    try {
        let userid=req.param.userid;
        let {products,orderdate,shippingadd,totalamount,payment}=req.body;
        
        return res.json('order deatials')
    } catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
}