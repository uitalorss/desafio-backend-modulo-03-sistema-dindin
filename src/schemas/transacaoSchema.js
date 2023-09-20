const Joi = require("joi");


const transacaoSchema = Joi.object({
    descricao: Joi.string()
    .required()
    .messages({
        "string.empty": "Campo descrição está vazio",
        "any.required": "O campo descrição é obrigatório",

    }),
    valor: Joi.number()
    .required()
    .positive()
    .messages({
        "any.required": "O campo valor é obrigatório",
        "number.positive": "Informe um valor válido"
    }),
    data: Joi.string()
    .isoDate()
    .required()
    .messages({
        "string.empty": "Campo data está vazio",
        "any.required": "O campo data é obrigatório",
        "string.isoDate": "Informe a data com um formato correto."
    }),
    categoria_id: Joi.number()
    .required()
    .positive()
    .max(17)
    .messages({
        "any.required": "O campo categoria_id é obrigatório",
        "number.positive": "Informe um categoria válido",
        "number.max": "Informe uma categoria válida"
    }),
    tipo: Joi.string()
    .required()
    .valid("entrada", "saída")
    .messages({
        "string.empty": "Campo tipo está vazio",
        "any.required": "O campo tipo é obrigatório",
        "any.only": "O campo tipo só pode receber valores 'entrada' e 'saída'"
    })
})

module.exports = transacaoSchema