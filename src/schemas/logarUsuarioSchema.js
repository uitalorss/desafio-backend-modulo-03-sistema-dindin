const Joi = require("joi");


const logarUsuarioSchema = Joi.object({
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

module.exports = logarUsuarioSchema