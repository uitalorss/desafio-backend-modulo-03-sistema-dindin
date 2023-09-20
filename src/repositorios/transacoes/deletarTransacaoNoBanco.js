const pool = require("../../config/conexao");

const deletarTransacaoNoBanco = async (id) => {
    const { rows: exclusao } = await pool.query(`delete from transacoes where id = $1`, [id])
                                                  
    return exclusao
}

module.exports = {
    deletarTransacaoNoBanco
}