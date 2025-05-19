import Joi from "joi";
export const artistasValidacion = (data) => {
    const schema = Joi.object({
       nombre:Joi.string().min(3).max(30).required().messages({
                   "any.required":'se requiere el nombre',
                   "string.empty":' no puede estar vacio el nombre',
                   "string.min":'muy pocas letras',
               }),
               apellido:Joi.string().min(3).max(30).required().messages({
                   "any.required":'se requiere el apellido',
                   "string.empty":' no puede estar vacio el apellido',
                   "string.min":'muy pocas letras',
               }),
               mini_biografia:Joi.string().min(5).max(100).required().messages({
                   "any.required":'se requiere una breve descripcion de la persona',
                   "string.min":' descripcion muy corta',
                   "string.max":'bastante descripcion',
               }),
               edad:Joi.number().min(4).max(100).required().messages({
                   "any.required":'se requiere la edad',
                   "number.min":' edad prematura',
                   "number.max":'edad longeva',
               }),
               instrumentos:Joi.array().min(1).items(Joi.string().required().messages({
                   "string.min":'descripcion muy corta',
                   "any.required":'cual es el instrumento que toca o usa el artista?'
               })).messages({
                    "array.min":'se requiere al menos un instrumento'
               }),
    })
    return schema.validate(data)
}



export const artistasValidacionIndividual = (data) => {
    const schema = Joi.object({
       nombre:Joi.string(),
       apellido:Joi.string(),
       mini_biografia:Joi.string(),
       edad:Joi.number(),
       instrumentos:Joi.array().items(Joi.string())
    }).min(1);
    return schema.validate(data)
}

export const discosValidacion = (data) => {
    const schema = Joi.object({
       nombre:Joi.string().min(3).max(30).required().messages({
                   "any.required":'se requiere el nombre',
                   "string.empty":' no puede estar vacio el nombre',
                   "string.min":'muy pocas letras',
               }),
               ano:Joi.number().min(1900).max(2025).required().messages({
                   "any.required":'se requiere el año',
                   "number.min":' año antes del 1900 no valido',
                   "number.max":'año despues del 2025 no valido',
               }),
               genero:Joi.string().min(3).max(150).required().messages({
                   "any.required":'se requiere el genero',
                    "number.min":' genero muy corto',
                   "number.max":'genero muy largo',
               }),
               banda:Joi.string().required().messages({
                   "any.required":'se requiere el id de la banda',
               }),
    })
    return schema.validate(data)
}

export const bandasValidacion = (data) => {
    const schema = Joi.object({
       nombre:Joi.string().max(15).required().messages({
                   "any.required":'se requiere el nombre',
                   "string.empty":' no puede estar vacio el nombre',
                   "string.max":'bastantes letras',
               }),
               ano_fundacion:Joi.number().min(1900).max(2025).required().messages({
                   "any.required":'se requiere el año',
                   "number.min":' año antes del 1900 no valido',
                   "number.max":'año despues del 2025 no valido',
               }),
               biografia:Joi.string().required().messages({
                   "any.required":'se requiere la biografia',
               })
    })
    return schema.validate(data)
}