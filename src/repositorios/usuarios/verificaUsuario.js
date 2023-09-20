const pool = require("../../config/conexao")


const verificaUsuarioValido = async (email) => {
  const queryUsuario = await pool.query("select * from usuarios where email = $1", [email]);
  if (queryUsuario.rowCount === 0) {
    return false;
  }
  const usuario = queryUsuario.rows[0];
  return usuario
}

module.exports = { verificaUsuarioValido }