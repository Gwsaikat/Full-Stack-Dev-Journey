
const  mongoose = require("mongoose");

async function ConnectDB(){
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/hally')
    console.log("Connected To DB")
}   

module.exports = ConnectDB