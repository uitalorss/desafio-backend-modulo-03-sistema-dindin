const pool = require("../../config/conexao")


const validarUsuario = async (idUsuario) => {
  const idDeUsuario = await pool.query("select id from usuarios where id=$1", [idUsuario]);
  if (idDeUsuario.rowCount === 0) {
    return false
  };
  return true;
}

module.exports = validarUsuario;