const pool = require("../../config/conexao")


const verificarCategoriaValida = async (categoria_id) => {
    const queryCategoria = await pool.query("select descricao from categorias where id = $1", [categoria_id]);
    if (queryCategoria.rowCount === 0) {
        return false;
    }
    const categoria = queryCategoria.rows[0];
    return categoria
  }

  module.exports = { verificarCategoriaValida }