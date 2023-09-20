const { listarTransacoesPorCategorias } = require("../repositorios/transacoes/listarTransacoes");


const obterTransacoesPorCategoria = async (idDeTransacoes, usuario_id) => {
  const filtroTransacoesPorCategoria = await Promise.all(idDeTransacoes.map(async (item) => {
    return await listarTransacoesPorCategorias(item, usuario_id);
  }))
  return filtroTransacoesPorCategoria;
}

module.exports = { obterTransacoesPorCategoria }