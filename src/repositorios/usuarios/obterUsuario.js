const pool = require("../../config/conexao")


const obterUsuario = async (id) => {
  const usuario = await pool.query("select id, nome, email from usuarios where id=$1", [id]);
  const dadosUsuario = usuario.rows[0];
  return dadosUsuario;
}

module.exports = { obterUsuario };