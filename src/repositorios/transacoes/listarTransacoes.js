const pool = require("../../config/conexao");

const listarTransacoesNoBanco = async (idUsuario) => {
    const { rows: transacoes } = await pool.query(`select t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id, c.descricao as "categoria_nome" from transacoes t join categorias c on c.id = t.categoria_id where usuario_id = $1`, [idUsuario])
    return transacoes
}


const listarUltimaTransacaoNoBanco = async (idUsuario) => {
    const { rows: transacao } = await pool.query(`select t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id, c.descricao as "categoria_nome" from transacoes t join categorias c on c.id = t.categoria_id where usuario_id = $1 order by t.id desc limit 1`, [idUsuario])
    return transacao
}

const listarTransacoesPorCategorias = async (idCategoria, idUsuario) => {
    const { rows: transacoes } = await pool.query(`select t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id, c.descricao as "categoria_nome" from transacoes t join categorias c on c.id = t.categoria_id where usuario_id = $1 and categoria_id=$2`, [idUsuario, idCategoria]);
    return transacoes;
}


module.exports = {
    listarTransacoesNoBanco, listarUltimaTransacaoNoBanco, listarTransacoesPorCategorias
}