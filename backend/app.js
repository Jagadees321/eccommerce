const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose')
const connectDb=require('./config/db');
const userroutes=require('./routes/userroutes');
const productroutes=require('./routes/productroutes');
const cors=require('cors');
//
dotenv.config()
const app=express();
connectDb()
app.use(express.json())
app.use(cors())

//routes middleware
app.use('/api',userroutes);
app.use('/api',productroutes);

const port=process.env.port ||3685;

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
    
})