const mongoose=require('mongoose');//import mongoose

const connectDb=async()=>{ // function to export then use in main file
    try {
        await mongoose.connect(process.env.mongouri);//using mongoose.connect('mongodb connection string')
                                                    //we can connect to mongodb thourgh mongoose
        console.log('db connected');// if connected display db connected in console
        
    } catch (error) {
      console.log("error "+error);//if not connected display error in console
        
    }
}

module.exports=connectDb // export to call in server.js //app.js when backend project server started