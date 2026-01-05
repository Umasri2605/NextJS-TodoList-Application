import mongoose from "mongoose";

async function dbConnect(){
const MONGO_URI=process.env.MONGO_URI;
    try{
        mongoose.connect(MONGO_URI!)
    }
    catch(e){
        throw(e)
    }
}
export default dbConnect;