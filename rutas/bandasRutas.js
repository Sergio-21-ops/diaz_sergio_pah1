import express from 'express';
import { crearBanda , getBanda, getBanda_x_id} from "../controladores/bandaControlador.js";

const bandasRutas = express.Router();

bandasRutas.post('/', crearBanda);
bandasRutas.get('/', getBanda);
bandasRutas.get('/:id', getBanda_x_id);

export { bandasRutas };
