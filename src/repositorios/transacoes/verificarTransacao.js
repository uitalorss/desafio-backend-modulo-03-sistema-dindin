const pool = require("../../config/conexao")


const verificarTransacao = async ({ id, usuario_id }) => {
  const dadosTransacao = await pool.query("select * from transacoes where id=$1 and usuario_id=$2", [id, usuario_id]);
  if (dadosTransacao.rowCount === 0) {
    return false;
  }
  return dadosTransacao.rows[0];
}

module.exports = { verificarTransacao };