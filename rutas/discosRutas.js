import express from "express"
import { agregarDisco,getDiscoXId,listaDiscos,modificarDisco,borrarDisco } from "../controladores/discoControlador.js";


const discosRutas = express.Router();

discosRutas.get('/',listaDiscos);
discosRutas.get('/:id',getDiscoXId);
discosRutas.post('/',agregarDisco);
discosRutas.put('/:id',modificarDisco);
discosRutas.delete('/:id',borrarDisco);
/*
router.patch('/:id',modificarDisco);


*/

export {discosRutas};