const pool = require("../../config/conexao")


const atualizarTransacao = async ({ descricao, valor, data, categoria_id, tipo, id }) => {
  const queryAtualizarTransacao = await pool.query(`
  update transacoes set descricao=$1, valor=$2, data=$3, categoria_id=$4, tipo=$5 where id=$6
  `, [descricao, valor, data, categoria_id, tipo, id]);
  return true;
}

module.exports = { atualizarTransacao };