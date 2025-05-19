import discoModelo from "../modelos/discoModelo.js"
import { discosValidacion } from "../validacion/validacion.js";
import bandaModelo from "../modelos/bandaModelo.js"


export async function listaDiscos(req,res) {
   
    const {genero,orden,ano}= req.query

     try {

        let discos = await discoModelo.find().populate("banda")


           if (genero) {
          const  espacios = genero.toLowerCase().replace(/_/g, ' ')
        discos = discos.filter(d => d.genero.toLowerCase() === espacios);
    }

   if (ano) {
        discos = discos.filter(d => d.ano === parseInt((ano)));
    } if (discos.length === 0) {
        return  res.status(404).json({message:"No existe ningun disco registrado en ese año "}); 
    }

  

      if (orden === 'asc'){
        discos.sort((a,b) => a.nombre.localeCompare(b.nombre))
    }   else if(orden === 'desc') {
        discos.sort((a,b) => b.nombre.localeCompare(a.nombre))
    }

           res.json(discos)
        } catch (err) {
           res.status(400).json({error:err.message});
       }

}


export async function getDiscoXId(req,res) {
     try {
           const disco = await discoModelo.findById(req.params.id).populate("banda")
           res.json(disco)
        } catch (err) {
           res.status(400).json({error:err.message});
       }

}

export async function agregarDisco(req,res) {

     const { error } = discosValidacion(req.body);
 if (error) return res.status(400).json({ error: error.details[0].message });



 const bandaExiste = await bandaModelo.findById(req.body.banda)
  if (!bandaExiste) return  res.status(404).json({message:"la banda no existe"}); 

  const discoExiste = await discoModelo.findOne({
    nombre: req.body.nombre,
    banda: req.body.banda,
  });
  if (discoExiste) return  res.status(404).json({message:"ya existe este disco"}); 




     try {
           const disco = new discoModelo({...req.body});
           const nuevoDisco = await disco.save();
           res.json(nuevoDisco);
       } catch (err) {
           res.status(400).json({error:err.message});
       }

}

export async function modificarDisco(req,res) {
   
   try {
          const discoActualizado = await discoModelo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        
          if(!discoActualizado) {
                        res.status(404).json({message:"disco no encontrado"}); 
        }
        res.json(discoActualizado)

               } catch (err) {
           res.status(400).json({error:err.message});
       }
}
export async function borrarDisco(req,res) {
   
 try {
       
     const discoBorrado = await discoModelo.findByIdAndDelete(req.params.id)

    if(!discoBorrado) {
          res.status(404).json({message:"disco no encontrado"});
    }
        res.json(discoBorrado)

    } catch (err) {
           res.status(400).json({error:err.message});
       }

}

