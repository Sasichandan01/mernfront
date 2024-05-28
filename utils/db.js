const mongoose = require('mongoose');
//  const URI =
//    "mongodb+srv://bhargavsasichandan:MUdMeErsiEsJmWby@cluster0.snqidmo.mongodb.net/sasichandan?retryWrites=true&w=majority";
const URI =
 process.env.MONGODB_URI;
const connectDb=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection succesfull to db");
    }
    catch(error){
        console.error(error);
        process.exit(0);
    }
}

module.exports=connectDb;
