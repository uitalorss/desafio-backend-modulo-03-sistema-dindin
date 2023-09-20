const pool = require("../../config/conexao")


const cadastrarUsuarioNoBanco = async ({ nome, email, senhaEncriptada }) => {
  const { rows: usuario } = await pool.query("insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *", [nome, email, senhaEncriptada]);
  const [{ senha, ...dadosUsuario }] = usuario
  return dadosUsuario;
}

module.exports = { cadastrarUsuarioNoBanco }