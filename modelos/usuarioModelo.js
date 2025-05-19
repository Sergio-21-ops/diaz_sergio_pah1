import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({

    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    nombre_usuario:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

export default mongoose.model('Usuarios',usuarioSchema)