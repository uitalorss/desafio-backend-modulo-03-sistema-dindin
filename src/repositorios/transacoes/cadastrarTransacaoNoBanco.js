const pool = require("../../config/conexao");
const { listarUltimaTransacaoNoBanco } = require("./listarTransacoes");

const cadastrarTransacaoNoBanco = async ({ tipo, descricao, valor, data, usuario_id, categoria_id }) => {
  const { rows: transacao } = await pool.query("insert into transacoes (tipo, descricao, valor, data, usuario_id, categoria_id) values ($1, $2, $3, $4, $5, $6) returning  id, tipo, descricao, valor, data, usuario_id, categoria_id", [tipo, descricao, valor, data, usuario_id, categoria_id]);
  return transacao, listarUltimaTransacaoNoBanco(usuario_id);
}

module.exports = { cadastrarTransacaoNoBanco }