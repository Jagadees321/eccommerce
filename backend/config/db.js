const mongoose=require('mongoose');

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.mongouri);
        console.log('db connected');
        
    } catch (error) {
      console.log("error "+error);
        
    }
}

module.exports=connectDb