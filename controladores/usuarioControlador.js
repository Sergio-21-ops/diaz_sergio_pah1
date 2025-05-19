import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import usuarioModelo from "../modelos/usuarioModelo.js";




dotenv.config();
const claveSecreta = process.env.JWT_SECRET;


export const crearUsuario = async (req,res) =>{

    const  {nombre,apellido,nombre_usuario,email,password} = req.body;

    try {
        
        if(!email || !password || !nombre || !apellido || !nombre_usuario){
             return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const hasheadoPassword = await bcrypt.hash(password,10)

        const usuario =  new usuarioModelo ({
            nombre,
            apellido,
            nombre_usuario,
            email,
            password:hasheadoPassword
        })
    
        const nuevoUsuario = await usuario.save();


        const {password: _, ...usuarioSinPassword  } = nuevoUsuario.toObject();

    res.status (201).json(usuarioSinPassword);


    } catch (err) {
        res.status(400).json({error:err.message});
    }

}


export const ingresarUsuario = async (req,res) =>{

    const  {email,password} = req.body;

    try {
        const usuario = await usuarioModelo.findOne({email})


    if(!usuario){
        
        return res.status (400).json({message:"no encontramos el usuario",});
    
        }

        const validarPassword = await bcrypt.compare(password,usuario.password)

       
     if(!validarPassword){
        
            return res.status (401).json({message:"error en la contraseña",});
        }
           
const token = jwt.sign({id:usuario._id , email:usuario.email},claveSecreta,{expiresIn:'1h'});


            return res.status (200).json({message:"Inicio de sesion correcto",token});
    } catch (error) {
         res.status(400).json({error:error.message});
    }
    

}


export const getUsuario = async (req,res) =>{

    try {
           const usuarios = await usuarioModelo.find({},'-password')
           res.json(usuarios)
        } catch (err) {
            res.status(400).json({error:err.message});
        }

}

export const autenticarJWT = (req, res,next) => {
    

    const authHeader = req.headers.authorization;


    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token,claveSecreta,(err,payload)=>{
            if(err){
                return res.status(403).json({ message: "Token inválido" });
            }
            req.usuario = payload;
            next()
        })
    }else{
        return res.status(403).json({ message: "Token inválido" });
    }
};