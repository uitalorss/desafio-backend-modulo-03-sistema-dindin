const pool = require("../../config/conexao");

const detalharTransacaoNoBanco = async (id) => {
    const { rows: transacoes } = await pool.query(`select t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id, c.descricao as "categoria_nome" from transacoes t join categorias c on c.id = t.categoria_id where t.id = $1`, [id])
    return transacoes
}

module.exports = {
    detalharTransacaoNoBanco
}