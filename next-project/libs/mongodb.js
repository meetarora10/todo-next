const mongoose = require('mongoose');
const connectMongo = async() =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/todb");
        console.log("connected");
    }
    catch(er){
        console.log(er);
    }
};
export default connectMongo;