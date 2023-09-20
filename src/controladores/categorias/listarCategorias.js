const { listarCategoriasNoBanco } = require("../../repositorios/categorias/listarCategorias");

const listarCategorias = async (req, res) => {
    try {
        const categorias = await listarCategoriasNoBanco()
        return res.status(200).json(categorias)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor." })
    }
}

module.exports = {
    listarCategorias
}