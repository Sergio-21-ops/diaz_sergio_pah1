import artistaModelo from "../modelos/artistaModelo.js";
import { artistasValidacion , artistasValidacionIndividual} from "../validacion/validacion.js";


export const crearArtista = async (req,res) =>{

        const { error } = artistasValidacion(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
       const existeArtista =  await artistaModelo.findOne({nombre:req.body.nombre,apellido:req.body.apellido,})
if(existeArtista) return res.status(400).json({error: "Ya existe el artista"});

    try {
        const artista = new artistaModelo({...req.body});
        const nuevoArtista = await artista.save();
        res.status(201).json(nuevoArtista);
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

export const getArtista = async (req,res) =>{
    try {
       let artistas = await artistaModelo.find()

     const {edad,nombre,orden}= req.query

     if (nombre) {  
          const  espacios = nombre.toLowerCase().replace(/_/g, ' ')
        artistas = artistas.filter(a => a.nombre.toLowerCase() === espacios);
    }

    if (edad) {
        artistas = artistas.filter(a => a.edad === parseInt((edad)));
    }

    if (artistas.length === 0) {
        return  res.status(404).json({message:"No existe ningun artista registrado"}); 
    }


    if (orden === 'asc'){
        artistas.sort((a,b) => a.nombre.localeCompare(b.nombre))
    }   else if(orden === 'desc') {
        artistas.sort((a,b) => b.nombre.localeCompare(a.nombre))
    }

       res.json(artistas)
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

export const getArtista_x_id = async (req,res) =>{


    try {
       const artista = await artistaModelo.findById(req.params.id)
           if (!artista) return res.status(404).json({ error: "No encontramos al artista" });

       res.json(artista)
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

export const buscarInstrumento = async (req,res) =>{


    try {
        
       
       if (!req.query.instrumentos) {
       return res.status(400).json({error: "Debes poner un instrumento en el cual se especializa el artista"});
       }

       const instrumentos = req.query.instrumentos.split(",")
        const artistas = await artistaModelo.find({ instrumentos: { $in: instrumentos } });
       res.json(artistas)
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

export const actualizarArtista = async (req,res) =>{


    const { error } = artistasValidacion(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
       const artistaActualizado = await artistaModelo.findByIdAndUpdate(req.params.id,req.body,{new:true})
       if(!artistaActualizado) {return res.status(404).json({error:"Artista no encontrado y actualizado"}); }
       res.json(artistaActualizado)
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}


export const actualizarArtistaInd = async (req,res) =>{


    const { error } = artistasValidacionIndividual(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
       const artistaActualizado = await artistaModelo.findByIdAndUpdate(req.params.id,req.body,{new:true})
       if(!artistaActualizado) {return res.status(404).json({error:"Artista no encontrado y actualizado"}); }
       res.json(artistaActualizado)
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}


export const borrarArtista = async (req,res) =>{
    try {
      
        const artistaBorrado = await artistaModelo.findByIdAndDelete(req.params.id);
        if(!artistaBorrado) {return res.status(404).json({error:"No se encontro al artista y no pudo ser borrado"}); }
       res.json(artistaBorrado)
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

export const buscarArtistasXNombre = async (req,res) =>{
    try {
        const {nombre,type} = req.query;


       let regex ; 

       switch (type){
        case 'exact':
            regex = new RegExp(`^${nombre}$`,`i`);
            break;
             case 'contains':
            regex = new RegExp(nombre,`i`);
            break;
            case 'startsWith':
            regex = new RegExp(`^${nombre}`,`i`);
            break;
            case 'endsWith':
            regex = new RegExp(`${nombre}$`,`i`);
            break;
            default:
               return res.status(400).json({error:"Tipo de busqueda no valido"});
       }


       const artistas = await artistaModelo.find({nombre: {$regex:regex }})
       res.json(artistas)
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

