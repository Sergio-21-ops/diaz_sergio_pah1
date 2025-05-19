import mongoose from "mongoose";

const artistaSchema = new mongoose.Schema({

    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    mini_biografia:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:true
    },
    instrumentos:[{type:String}]
})

export default mongoose.model('Artistas',artistaSchema)