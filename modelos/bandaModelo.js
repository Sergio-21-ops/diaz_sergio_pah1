import mongoose from "mongoose";
const bandaSchema = new mongoose.Schema({

    nombre:{
        type:String,
        required:true
    },
    ano_fundacion:{
        type:Number,
        required:true
    },
    biografia:{
        type:String,
        required:true
    }
})

export default mongoose.model('Banda',bandaSchema)