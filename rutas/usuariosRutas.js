import express from "express";
import { crearUsuario,getUsuario,ingresarUsuario ,autenticarJWT} from "../controladores/usuarioControlador.js";

const usuariosRutas = express.Router();

usuariosRutas.post('/',crearUsuario);
usuariosRutas.post('/ingresar',ingresarUsuario);
usuariosRutas.get('/',autenticarJWT ,getUsuario);


export {usuariosRutas};