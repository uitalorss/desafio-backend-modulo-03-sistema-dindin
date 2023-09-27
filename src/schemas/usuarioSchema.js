const Joi = require("joi");


const usuarioSchema = Joi.object({
    nome: Joi.string()
    .required()
    .messages({
        "string.empty": "Campo nome está vazio",
        "string.base": "Favor informar um nome válido",
        "any.required": "O campo nome é obrigatório"
    }),
    email: Joi.string()
    .email()
    .required()
    .messages({
        "string.empty": "Campo email está vazio",
        "any.required": "O campo email é obrigatório",
        "string.email": "Favor informar um email válido"
    }),
    senha: Joi.string()
    .min(5)
    .max(15)
    .required()
    .messages({
        "string.empty": "Campo senha está vazio",
        "any.required": "O campo senha é obrigatório",
        "string.min": "A senha deve ter, pelo menos, 5 caracteres",
        "string.max": "A senha deve ter, no máximo, 15 caracteres"
    })
})

module.exports = usuarioSchema;