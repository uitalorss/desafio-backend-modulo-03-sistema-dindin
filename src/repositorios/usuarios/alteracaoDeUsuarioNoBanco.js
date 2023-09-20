const pool = require("../../config/conexao")


const alteracaoDeUsuarioNoBanco = async ({ nome, email, senhaEncriptada, id }) => {
  return await pool.query("update usuarios set nome=$1, email=$2, senha=$3 where id=$4 returning *", [nome, email, senhaEncriptada, id]);
}

module.exports = { alteracaoDeUsuarioNoBanco }