import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Please Enter Title"]
    },
    status:{
        type:String
    }

})
 export default mongoose.models.Todo||
 mongoose.model("Todo",todoSchema)