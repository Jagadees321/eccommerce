const productmodel = require('../models/productmodel');

const createproduct = async (req, res) => {
    try {
        console.log(req.body);
        let product = await productmodel.findOne({ title: req.body.title });
        if (product) {
            return res.status(400).json({ error: "product already exist" })
        }
        let newproduct = await new productmodel(req.body);
        newproduct.save();
        return res.status(201).json({ message: "product created" })
    } catch (error) {
        return res.status(500).json({ error: "internal server error" })
    }
}

const getproducts=async(req,res)=>{
    try {
        let products=await productmodel.find();
        return res.status(200).json(products)
    } catch (error) {
        
    }
}


const getproductbyid=async(req,res)=>{
    try {
        let id=req.params.id;
        let product=await productmodel.findById(id);
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({error:'internal server error'})
    }
}
module.exports={createproduct,getproducts,getproductbyid}