const pool = require("../../config/conexao");

const listarCategoriasNoBanco = async () => {
    const { rows: categorias } = await pool.query(`select * from categorias`)
    return categorias
}

module.exports = {
    listarCategoriasNoBanco
}