import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true,
    },
},
   {
    timestamps: true
   }
);

export default mongoose.model("Categories", CategorySchema)