const mongoose = require('mongoose')

const db = async ()=>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database Connection Successful');
    }catch(error){
        console.log("Database Connection Error : ",error);
    }
}

module.exports = {db}