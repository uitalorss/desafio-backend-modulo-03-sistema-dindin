const pool = require("../../config/conexao")


const verificarCategoria = async (id) => {
  const categoriaValida = await pool.query("select * from categorias where id=$1", [id]);
  if (categoriaValida.rowCount === 0) {
    return false;
  }
  return true;
}
module.exports = { verificarCategoria }