const pool = require("../../config/conexao")


const verificarCategoria = async (id) => {
  const categoriaValida = await pool.query("select * from categorias where id=$1", [id]);
  return categoriaValida.rowCount === 0;
}
module.exports = { verificarCategoria }