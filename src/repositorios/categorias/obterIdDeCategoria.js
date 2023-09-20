const pool = require("../../config/conexao")


const obterIdDeCategoria = async (categoria) => {
  const filtroCategorias = await pool.query("select id from categorias where descricao=$1", [categoria]);
  if (filtroCategorias.rowCount === 0) {
    return undefined;
  }
  const { rows: idCategoria } = filtroCategorias;
  const [{ id }] = idCategoria
  return id;
}

module.exports = { obterIdDeCategoria };