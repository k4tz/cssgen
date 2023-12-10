const mongoose = require('mongoose');
const config = require("config");
const db = config.get("MongodbURI");

const connectDB = async () => {
    try{
        mongoose.connect(db);
        console.log("Mongo db connected!");
    }catch(err){
        console.log("failed to connect");
        process.exit(1);
    }
}

module.exports = connectDB;         