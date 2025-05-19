import express from 'express';
import { crearArtista,getArtista ,actualizarArtistaInd,buscarArtistasXNombre,getArtista_x_id,buscarInstrumento,actualizarArtista,borrarArtista} from "../controladores/artistaControlador.js";

const artistasRutas = express.Router();

artistasRutas.post('/', crearArtista);
artistasRutas.get('/buscar/instrumentos', buscarInstrumento);
artistasRutas.get('/buscar/nombre', buscarArtistasXNombre);
artistasRutas.get('/', getArtista);
artistasRutas.get('/:id', getArtista_x_id);
artistasRutas.put('/:id', actualizarArtista);
artistasRutas.patch('/:id', actualizarArtistaInd);
artistasRutas.delete('/:id', borrarArtista);
export { artistasRutas };
