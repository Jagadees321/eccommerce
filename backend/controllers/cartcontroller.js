const cartmodel=require('../models/cartmodel');
const usermodel = require('../models/usermodel');
const productmodel = require('../models/productmodel');


const createcart=async(req,res)=>{
    try {
        let {userid,productid}=req.body;
        let user=await usermodel.findById(userid);
        if(!user){
            return res.status(400).json({error:"user not found"});
        }
        let product=await productmodel.findById(productid);
        if(!product){
            return res.status(400).json({error:"product  not found"});
        }
        let newcart=await new cartmodel(req.body);
        newcart.save();
        return res.status(200).json({data:{userid,productid}});
    } catch (error) {
        return res.status(500).json({error:"internal server error"});
    }
}

const getcarts=async (req,res)=>{
    try {
        let cart=await cartmodel.find();
        let arr=[];
        cart.foreach((cart)=>{
             let userdetails= usermodel.findById(cart.userid);
           console.log(userdetails);
             
             let productdetails= productmodel.findById(cart.productid);
            // console.log(productdetails);
             let obj={
                username:userdetails.username,
                email:userdetails.email,
                title:productdetails.title,
                price:productdetails.price,
                description:productdetails.description
             }
             console.log(obj);
             
             arr=[...arr,obj];
        })
        
        return res.status(200).json(arr);
    } catch (error) {
        return res.status(500).json({error:"internal server error"});
    }
}
module.exports={createcart,getcarts}

